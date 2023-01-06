import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { Appointments, AppointmentsSchema } from './appointments.schema';
import { AppointmentsRepository } from './appointments.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Appointments.name, schema: AppointmentsSchema },
    ]),
  ],
  controllers: [AppointmentsController],
  providers: [AppointmentsService, AppointmentsRepository],
})
export class AppointmentsModule {}
