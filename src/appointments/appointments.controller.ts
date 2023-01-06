import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointment } from './dtos/create-appointment.dto';
import { UpdateAppointment } from './dtos/update-appointment.dto';

@Controller('/appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get()
  getAppointments() {
    return this.appointmentsService.getAppointments();
  }

  @Post()
  createAppointments(@Body() request: CreateAppointment) {
    return this.appointmentsService.createAppointments(request);
  }

  @Patch()
  updateAppointment(@Body() request: UpdateAppointment) {
    return this.appointmentsService.updateAppointment(request);
  }
}
