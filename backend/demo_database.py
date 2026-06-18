from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import sqlite3
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent
DB_PATH = ROOT / "chocolate_demo.sqlite"
PORT = 3000


PRODUCTS = [
    {
        "batch": "#PE-2026",
        "qr_code": "QR-PE-2026",
        "name": "Fairtrade Puur 72%",
        "origin": "Piura, Peru",
        "allergens": "Vegan, sojavrij. Kan sporen van noten bevatten.",
    },
    {
        "batch": "#MK-8812",
        "qr_code": "QR-MK-8812",
        "name": "Melk Gezouten Karamel",
        "origin": "Belgie",
        "allergens": "Bevat melk en soja. Kan sporen van noten bevatten.",
    },
    {
        "batch": "#EC-9901",
        "qr_code": "QR-EC-9901",
        "name": "Ecuador Single Origin 85%",
        "origin": "Manabi, Ecuador",
        "allergens": "Vegan, lactosevrij. Kan sporen van noten bevatten.",
    },
    {
        "batch": "#VK-5512",
        "qr_code": "QR-VK-5512",
        "name": "Vegan Kokosmelk 45%",
        "origin": "Kumasi, Ghana",
        "allergens": "Vegan. Bevat kokos.",
    },
]


def connect():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with connect() as conn:
        conn.executescript(
            """
            CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              email TEXT NOT NULL UNIQUE,
              name TEXT,
              created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS products (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              batch TEXT NOT NULL UNIQUE,
              qr_code TEXT UNIQUE,
              name TEXT NOT NULL,
              origin TEXT,
              allergens TEXT,
              created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS product_registrations (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              user_id INTEGER NOT NULL,
              product_id INTEGER NOT NULL,
              registered_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
              UNIQUE(user_id, product_id),
              FOREIGN KEY(user_id) REFERENCES users(id),
              FOREIGN KEY(product_id) REFERENCES products(id)
            );
            """
        )
        conn.executemany(
            """
            INSERT INTO products (batch, qr_code, name, origin, allergens)
            VALUES (:batch, :qr_code, :name, :origin, :allergens)
            ON CONFLICT(batch) DO UPDATE SET
              qr_code=excluded.qr_code,
              name=excluded.name,
              origin=excluded.origin,
              allergens=excluded.allergens
            """,
            PRODUCTS,
        )


def row_to_dict(row):
    return {key: row[key] for key in row.keys()}


def register_product(payload):
    email = payload.get("email") or "alex.devries@email.nl"
    name = payload.get("userName") or email.split("@")[0]
    batch = payload.get("batchNumber")
    qr_code = payload.get("qrCode")
    product_name = payload.get("name") or "Demo product"

    if not batch and not qr_code:
        return 400, {"success": False, "error": "batchNumber or qrCode is required"}

    with connect() as conn:
        conn.execute(
            "INSERT INTO users (email, name) VALUES (?, ?) ON CONFLICT(email) DO UPDATE SET name=excluded.name",
            (email, name),
        )
        user = conn.execute("SELECT * FROM users WHERE email = ?", (email,)).fetchone()

        product = conn.execute(
            "SELECT * FROM products WHERE batch = ? OR qr_code = ?",
            (batch, qr_code),
        ).fetchone()

        if product is None:
            conn.execute(
                """
                INSERT INTO products (batch, qr_code, name, origin, allergens)
                VALUES (?, ?, ?, ?, ?)
                """,
                (batch, qr_code, product_name, "Onbekend", "Niet opgegeven"),
            )
            product = conn.execute(
                "SELECT * FROM products WHERE batch = ? OR qr_code = ?",
                (batch, qr_code),
            ).fetchone()

        conn.execute(
            """
            INSERT OR IGNORE INTO product_registrations (user_id, product_id)
            VALUES (?, ?)
            """,
            (user["id"], product["id"]),
        )

        registration = conn.execute(
            """
            SELECT
              pr.id,
              pr.registered_at,
              u.email,
              p.batch,
              p.qr_code,
              p.name,
              p.origin,
              p.allergens
            FROM product_registrations pr
            JOIN users u ON u.id = pr.user_id
            JOIN products p ON p.id = pr.product_id
            WHERE u.id = ? AND p.id = ?
            """,
            (user["id"], product["id"]),
        ).fetchone()

    return 200, {"success": True, "data": row_to_dict(registration)}


def list_registrations():
    with connect() as conn:
        rows = conn.execute(
            """
            SELECT
              pr.id,
              pr.registered_at,
              u.email,
              p.batch,
              p.name,
              p.origin
            FROM product_registrations pr
            JOIN users u ON u.id = pr.user_id
            JOIN products p ON p.id = pr.product_id
            ORDER BY pr.registered_at DESC
            """
        ).fetchall()
    return {"success": True, "data": [row_to_dict(row) for row in rows]}


class DemoHandler(BaseHTTPRequestHandler):
    def _send_json(self, status, body):
        data = json.dumps(body, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_OPTIONS(self):
        self._send_json(200, {"success": True})

    def do_GET(self):
        path = urlparse(self.path).path
        if path in ("/", "/api"):
            self._send_json(
                200,
                {
                    "success": True,
                    "message": "Chocolate Firm SQLite demo API",
                    "database": str(DB_PATH),
                    "endpoints": [
                        "POST /api/products/register",
                        "GET /api/registrations",
                    ],
                },
            )
            return

        if path == "/api/registrations":
            self._send_json(200, list_registrations())
            return

        self._send_json(404, {"success": False, "error": "Not found"})

    def do_POST(self):
        path = urlparse(self.path).path
        length = int(self.headers.get("Content-Length", "0"))
        body = self.rfile.read(length).decode("utf-8") if length else "{}"

        try:
            payload = json.loads(body)
        except json.JSONDecodeError:
            self._send_json(400, {"success": False, "error": "Invalid JSON"})
            return

        if path == "/api/products/register":
            status, response = register_product(payload)
            self._send_json(status, response)
            return

        self._send_json(404, {"success": False, "error": "Not found"})

    def log_message(self, format, *args):
        print("%s - %s" % (self.address_string(), format % args))


if __name__ == "__main__":
    init_db()
    server = HTTPServer(("localhost", PORT), DemoHandler)
    print(f"SQLite demo API running on http://localhost:{PORT}")
    print(f"Database file: {DB_PATH}")
    print("Open http://localhost:3000/api/registrations to view saved registrations.")
    server.serve_forever()
