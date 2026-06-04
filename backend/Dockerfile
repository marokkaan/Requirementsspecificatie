FROM node:18-alpine
WORKDIR /app
COPY package.json package.json
COPY tsconfig.json tsconfig.json
RUN npm ci --silent || true
COPY . .
RUN npm run build || true
EXPOSE 3000
CMD ["node", "dist/main.js"]
