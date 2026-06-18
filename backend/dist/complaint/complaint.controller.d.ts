import { ComplaintService } from './complaint.service';
import { SubmitComplaintDto } from './dto/submit-complaint.dto';
export declare class ComplaintController {
    private readonly service;
    constructor(service: ComplaintService);
    list(): Promise<{
        success: boolean;
        data: ({
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
        })[];
    }>;
    create(body: SubmitComplaintDto): Promise<{
        success: boolean;
        data: {
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
        };
    }>;
}
