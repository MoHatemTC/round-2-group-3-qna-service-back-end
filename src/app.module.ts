import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentDashboardModule } from './student-dashboard/student-dashboard.module';

@Module({
  imports: [StudentDashboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
