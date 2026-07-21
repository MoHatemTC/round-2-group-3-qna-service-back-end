import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StudentDashboardModule } from './student-dashboard/student-dashboard.module';
import { AuthModule } from './auth/auth.module';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [PrismaModule, StudentDashboardModule, AuthModule, AnalyticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}