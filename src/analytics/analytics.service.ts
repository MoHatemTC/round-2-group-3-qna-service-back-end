import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async getCoreCards(quizId: string) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { id: quizId },
    });

    if (!quiz) {
      throw new NotFoundException('Quiz not found');
    }

    const attempts = await this.prisma.attempt.findMany({
      where: { quizId: quizId },
    });

    const invited = attempts.length;
    const started = attempts.filter((a: any) => a.status === 'STARTED' || a.submittedAt).length;
    const submitted = attempts.filter((a: any) => a.submittedAt !== null).length;

    if (started === 0) {
      return {
        invited,
        started: 0,
        submitted: 0,
        completionRate: 'No attempts recorded yet',
        averageScore: 'No attempts recorded yet',
      };
    }

    const completionRate = `${((submitted / invited) * 100).toFixed(1)}%`;

    const scoredAttempts = attempts.filter((a: any) => typeof a.score === 'number');
    let averageScore = 'No attempts recorded yet';

    if (scoredAttempts.length > 0) {
      const totalScore = scoredAttempts.reduce((sum: number, a: any) => sum + a.score, 0);
      averageScore = (totalScore / scoredAttempts.length).toFixed(1);
    }

    return {
      invited,
      started,
      submitted,
      completionRate,
      averageScore,
    };
  }
}