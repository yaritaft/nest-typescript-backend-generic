import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAppointment {
  @IsOptional()
  @IsString()
  subject?: string;
  @IsOptional()
  @IsNumber()
  fromDatetime?: number;
  @IsOptional()
  @IsNumber()
  toDatetime?: number;
  @IsOptional()
  @IsString()
  cellphoneNumberAttendant?: string;
  @IsNotEmpty()
  @IsString()
  appointmentId: string;
}
