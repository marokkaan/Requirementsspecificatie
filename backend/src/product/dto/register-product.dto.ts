import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RegisterProductDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  qrCode?: string;

  @IsOptional()
  @IsString()
  batchNumber?: string;
}
