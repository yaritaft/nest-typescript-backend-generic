import { Controller, Get, Post } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';

@Controller('/appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get()
  getHello() {
    return this.appointmentsService.getAppointments();
  }

  @Post()
  postHello() {
    return this.appointmentsService.postAppointments();
  }
}
