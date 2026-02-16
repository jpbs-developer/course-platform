import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcademyModule } from './academy/academy.module';

@Module({
  imports: [AcademyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
