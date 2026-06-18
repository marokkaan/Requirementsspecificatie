import { IsOptional, IsString } from 'class-validator';

export class SubmitComplaintDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  qrCode?: string;

  @IsOptional()
  @IsString()
  batchNumber?: string;

  @IsString()
  type!: string;

  @IsString()
  description!: string;
}