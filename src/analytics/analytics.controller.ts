// src/analytics/analytics.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import type { QuizAnalyticsInput, CoreCardsOutput } from './analytics.types';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Post('core-cards')
  getCoreCards(@Body() quizData: QuizAnalyticsInput): CoreCardsOutput {
    return this.analyticsService.getCoreCards(quizData);
  }
}