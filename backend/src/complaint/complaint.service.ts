import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { SubmitComplaintDto } from './dto/submit-complaint.dto';

@Injectable()
export class ComplaintService {
  constructor(private readonly prisma: PrismaService) {}

  async createComplaint(payload: SubmitComplaintDto) {
    if (!payload.userId && !payload.email) {
      throw new BadRequestException('userId or email is required');
    }

    if (!payload.type?.trim() || !payload.description?.trim()) {
      throw new BadRequestException('type and description are required');
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

  private async findProduct(payload: SubmitComplaintDto) {
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
}