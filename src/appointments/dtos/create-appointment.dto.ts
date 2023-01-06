import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAppointment {
  @IsNotEmpty()
  subject: string;
  @IsNotEmpty()
  @IsNumber()
  fromDatetime: number;
  @IsNotEmpty()
  @IsNumber()
  toDatetime: number;
  @IsEmail()
  @IsNotEmpty()
  mailAttendant: string;
  @IsNotEmpty()
  cellphoneNumberAttendant: string;
}
