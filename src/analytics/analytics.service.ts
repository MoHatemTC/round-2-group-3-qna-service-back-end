import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async getCoreCards(quizId: string) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
        attempts: true,
      },
    });

    if (!quiz) {
      throw new NotFoundException('Quiz not found');
    }

    const attempts = quiz.attempts;

    const uniqueStudents = new Set(attempts.map((a: any) => a.userId));
    const invited = uniqueStudents.size > 0 ? uniqueStudents.size : attempts.length;

    const started = attempts.filter((a: any) => a.status === 'STARTED' || a.submittedAt).length;
    const submitted = attempts.filter((a: any) => a.submittedAt !== null).length;

    return {
      invited,
      started,
      submitted,
    };
  }
}