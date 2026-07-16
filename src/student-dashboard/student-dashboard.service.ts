import { Injectable } from '@nestjs/common';
import { CreateStudentDashboardDto } from './dto/create-student-dashboard.dto';
import { UpdateStudentDashboardDto } from './dto/update-student-dashboard.dto';
import { QuizDashboardResponseDto } from './dto/quiz-dashboard-response.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentDashboardService {
  constructor(private prisma: PrismaService) { }

  async getStudentQuizzes(studentId: string): Promise<QuizDashboardResponseDto[]> {
    const quizzes = await this.prisma.quiz.findMany();

    return quizzes.map(q => ({
      quizId: q.id,
      quizName: q.title,
      duration: q.duration,
      closedTime: q.closeDate,
      studentState: 'Not started',
    }));
  }

  create(createStudentDashboardDto: CreateStudentDashboardDto) {
    return 'This action adds a new studentDashboard';
  }

  findAll() {
    return `This action returns all studentDashboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentDashboard`;
  }

  update(id: number, updateStudentDashboardDto: UpdateStudentDashboardDto) {
    return `This action updates a #${id} studentDashboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentDashboard`;
  }
}
