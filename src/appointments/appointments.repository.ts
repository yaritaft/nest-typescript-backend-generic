import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Appointments, AppointmentsDocument } from './appointments.schema';

@Injectable()
export class AppointmentsRepository {
  constructor(
    @InjectModel(Appointments.name)
    private appointmentsModel: Model<AppointmentsDocument>,
  ) {}
  getHello(): string {
    return 'Hello World! 3';
  }
}
