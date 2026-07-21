import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async calculateCoreCards(quizId: string) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
       
      },
    });

    if (!quiz) {
      throw new NotFoundException('Quiz not found');
    }

    return {
      invited: 0,
      started: 0,
      submitted: 0,
      completionRate: "No attempts recorded yet",
      averageScore: "No attempts recorded yet"
    };
  }
}