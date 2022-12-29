import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointments, AppointmentsDocument } from './appointments.schema';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel(Appointments.name)
    private appointmentsModel: Model<AppointmentsDocument>,
  ) {}
  getHello(): string {
    return 'Hello World! 3';
  }

  async getAppointments(): Promise<Appointments[]> {
    const appointments = await this.appointmentsModel.find<Appointments>({});
    return appointments;
  }

  async postAppointments(): Promise<Appointments[]> {
    const newAppointment = new this.appointmentsModel({
      subject: 123,
      fromDatetime: new Date().valueOf(),
      toDatetime: new Date().valueOf() - 1,
      mailAttendant: 'aaa@gmail.com',
      appointmentId: 'aaaqq',
      cellphoneNumberAttendant: 'aaa',
    });
    await newAppointment.save();

    return this.getAppointments();
  }
}
