import { Body, Controller, Get, Post } from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { SubmitComplaintDto } from './dto/submit-complaint.dto';

@Controller('complaints')
export class ComplaintController {
  constructor(private readonly service: ComplaintService) {}

  @Get()
  async list() {
    return { success: true, data: await this.service.listComplaints() };
  }

  @Post()
  async create(@Body() body: SubmitComplaintDto) {
    const result = await this.service.createComplaint(body);
    return { success: true, data: result };
  }
}