"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async registerByQr(payload) {
        if (!payload.userId && !payload.email) {
            throw new common_1.BadRequestException('userId or email is required');
        }
        if (!payload.qrCode && !payload.batchNumber) {
            throw new common_1.BadRequestException('qrCode or batchNumber is required');
        }
        const user = await this.prisma.user.upsert({
            where: { email: payload.email ?? `${payload.userId}@demo.local` },
            update: {},
            create: {
                id: payload.userId,
                email: payload.email ?? `${payload.userId}@demo.local`,
                name: payload.email ? payload.email.split('@')[0] : 'Demo gebruiker',
            },
        });
        const product = await this.findOrCreateProduct(payload);
        const registration = await this.prisma.productRegistration.upsert({
            where: {
                userId_productId: {
                    userId: user.id,
                    productId: product.id,
                },
            },
            update: {},
            create: {
                userId: user.id,
                productId: product.id,
            },
            include: {
                product: true,
                user: {
                    select: {
                        id: true,
                        email: true,
                        name: true,
                    },
                },
            },
        });
        return registration;
    }
    async findOrCreateProduct(payload) {
        const conditions = [];
        if (payload.batchNumber) {
            conditions.push({ batch: payload.batchNumber });
        }
        if (payload.qrCode) {
            conditions.push({ qrCode: payload.qrCode });
        }
        const product = await this.prisma.product.findFirst({
            where: {
                OR: conditions,
            },
        });
        if (product)
            return product;
        if (!payload.name) {
            throw new common_1.NotFoundException('Product not found. Provide product name to create demo product.');
        }
        return this.prisma.product.create({
            data: {
                sku: payload.batchNumber ?? payload.qrCode ?? `SKU-${Date.now()}`,
                name: payload.name,
                batch: payload.batchNumber,
                qrCode: payload.qrCode,
                description: 'Demo product created from app registration',
            },
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map