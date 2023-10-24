import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrescriptionsController } from './prescriptions/prescriptions.controller';

@Module({
  imports: [],
  controllers: [AppController, PrescriptionsController],
  providers: [AppService],
})
export class AppModule {}
