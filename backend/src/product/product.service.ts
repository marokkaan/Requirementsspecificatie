import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { RegisterProductDto } from './dto/register-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async registerByQr(payload: RegisterProductDto) {
    if (!payload.userId && !payload.email) {
      throw new BadRequestException('userId or email is required');
    }

    if (!payload.qrCode && !payload.batchNumber) {
      throw new BadRequestException('qrCode or batchNumber is required');
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

  async deleteRegistration(registrationId: string) {
    return this.prisma.productRegistration.delete({
      where: { id: registrationId },
    });
  }

  private async findOrCreateProduct(payload: RegisterProductDto) {
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

    if (product) return product;

    if (!payload.name) {
      throw new NotFoundException('Product not found. Provide product name to create demo product.');
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
}
