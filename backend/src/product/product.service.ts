import { Injectable } from '@nestjs/common';

type RegisterPayload = {
  userId: string;
  qrCode?: string;
  batchNumber?: string;
};

@Injectable()
export class ProductService {
  async registerByQr(payload: RegisterPayload) {
    // TODO: Validate QR, lookup product, create registration
    // This is a stubbed response for the scaffold.
    const product = {
      id: 'prod_stub_1',
      name: 'Demo Chocolate Bar',
      batch: payload.batchNumber || 'BATCH1234',
      registeredAt: new Date().toISOString(),
    };

    const registration = {
      id: 'reg_stub_1',
      userId: payload.userId,
      productId: product.id,
      product,
    };

    return registration;
  }
}
