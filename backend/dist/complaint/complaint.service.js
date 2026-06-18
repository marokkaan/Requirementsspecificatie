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
exports.ComplaintService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ComplaintService = class ComplaintService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createComplaint(payload) {
        if (!payload.userId && !payload.email) {
            throw new common_1.BadRequestException('userId or email is required');
        }
        if (!payload.type?.trim() || !payload.description?.trim()) {
            throw new common_1.BadRequestException('type and description are required');
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
        const product = await this.findProduct(payload);
        return this.prisma.complaint.create({
            data: {
                userId: user.id,
                productId: product?.id,
                type: payload.type.trim(),
                description: payload.description.trim(),
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
    }
    async listComplaints() {
        return this.prisma.complaint.findMany({
            orderBy: { createdAt: 'desc' },
            take: 20,
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
    }
    async findProduct(payload) {
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
        if (product) {
            return product;
        }
        if (!payload.name) {
            return null;
        }
        return this.prisma.product.create({
            data: {
                sku: payload.batchNumber ?? payload.qrCode ?? `SKU-${Date.now()}`,
                name: payload.name,
                batch: payload.batchNumber,
                qrCode: payload.qrCode,
                description: 'Demo product created from complaint submission',
            },
        });
    }
};
exports.ComplaintService = ComplaintService;
exports.ComplaintService = ComplaintService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComplaintService);
//# sourceMappingURL=complaint.service.js.map