import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [
    AppointmentsModule,
    MongooseModule.forRoot(
      'mongodb://admin:admin123@127.0.0.1:27017/mentorship?authSource=admin',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
