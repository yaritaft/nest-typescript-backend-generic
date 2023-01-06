import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { Appointments } from './appointments.schema';
import { CreateAppointment } from './dtos/create-appointment.dto';
import { AppointmentsRepository } from './appointments.repository';
import { UpdateAppointment } from './dtos/update-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(private appointmentsRepository: AppointmentsRepository) {}

  async getAppointments(): Promise<Appointments[]> {
    return this.appointmentsRepository.getAppointments();
  }

  updateAppointment(request: UpdateAppointment) {
    return this.appointmentsRepository.updateAppointment(request);
  }

  async createAppointments(
    request: CreateAppointment,
  ): Promise<Appointments[]> {
    const appointmentId = v4();
    await this.appointmentsRepository.createAppointment({
      ...request,
      appointmentId,
    });

    return this.appointmentsRepository.getAppointments();
  }
}
