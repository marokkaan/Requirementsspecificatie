import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { ComplaintModule } from './complaint/complaint.module';

@Module({
  imports: [ProductModule, ComplaintModule],
})
export class AppModule {}
