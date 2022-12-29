import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { Appointments, AppointmentsSchema } from './appointments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Appointments.name, schema: AppointmentsSchema },
    ]),
  ],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}
