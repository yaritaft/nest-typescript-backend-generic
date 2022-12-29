import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { isEmail } from 'class-validator';
import { Document } from 'mongoose';

export type AppointmentsDocument = Document<Appointments>;

@Schema()
export class Appointments {
  @Prop({
    required: true,
  })
  subject: string;

  @Prop({
    required: true,
  })
  fromDatetime: number;

  @Prop({
    required: true,
  })
  toDatetime: number;

  @Prop({
    required: true,
  })
  appointmentId: string;

  @Prop({
    required: true,
    validate: {
      validator: isEmail,
      message: 'Given value is not an email.',
    },
  })
  mailAttendant: string;

  @Prop({
    required: true,
  })
  cellphoneNumberAttendant: string;
}

export const AppointmentsSchema = SchemaFactory.createForClass(Appointments);
