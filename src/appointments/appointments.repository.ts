import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointments, AppointmentsDocument } from './appointments.schema';
import { CreateAppointment } from './dtos/create-appointment.dto';
import { UpdateAppointment } from './dtos/update-appointment.dto';

@Injectable()
export class AppointmentsRepository {
  constructor(
    @InjectModel(Appointments.name)
    private appointmentsModel: Model<AppointmentsDocument>,
  ) {}

  createAppointment(request: CreateAppointment & { appointmentId: string }) {
    const newAppointment = new this.appointmentsModel(request);
    return newAppointment.save();
  }

  async updateAppointment({
    appointmentId,
    ...infoToUpdate
  }: UpdateAppointment) {
    return this.appointmentsModel
      .findOneAndUpdate(
        { appointmentId },
        { ...infoToUpdate },
        { new: true, returnDocument: 'after' },
      )
      .exec();
  }

  async getAppointments(): Promise<Appointments[]> {
    const appointments = await this.appointmentsModel.find<Appointments>({});
    return appointments;
  }
}
