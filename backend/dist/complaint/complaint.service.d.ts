import { PrismaService } from '../prisma.service';
import { SubmitComplaintDto } from './dto/submit-complaint.dto';
export declare class ComplaintService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createComplaint(payload: SubmitComplaintDto): Promise<{
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
        } | null;
    } & {
        id: string;
        userId: string;
        productId: string | null;
        createdAt: Date;
        description: string;
        type: string;
        status: string;
        updatedAt: Date;
    }>;
    listComplaints(): Promise<({
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
        } | null;
    } & {
        id: string;
        userId: string;
        productId: string | null;
        createdAt: Date;
        description: string;
        type: string;
        status: string;
        updatedAt: Date;
    })[]>;
    private findProduct;
}
