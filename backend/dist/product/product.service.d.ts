import { PrismaService } from '../prisma.service';
import { RegisterProductDto } from './dto/register-product.dto';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    registerByQr(payload: RegisterProductDto): Promise<{
        user: {
            id: string;
            email: string;
            name: string | null;
        };
        product: {
            id: string;
            name: string;
            createdAt: Date;
            sku: string;
            description: string | null;
            batch: string | null;
            qrCode: string | null;
            origin: string | null;
            expiryDate: Date | null;
            allergens: string | null;
            cacaoPercent: number | null;
            certificates: string[];
        };
    } & {
        id: string;
        userId: string;
        productId: string;
        registered: Date;
    }>;
    private findOrCreateProduct;
}
