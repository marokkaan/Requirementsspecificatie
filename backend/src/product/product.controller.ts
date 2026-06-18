import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { RegisterProductDto } from './dto/register-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Post('register')
  async register(@Body() body: RegisterProductDto) {
    const result = await this.service.registerByQr(body);
    return { success: true, data: result };
  }

  @Delete('registrations/:registrationId')
  async removeRegistration(@Param('registrationId') registrationId: string) {
    const result = await this.service.deleteRegistration(registrationId);
    return { success: true, data: result };
  }
}
