import { Injectable } from '@nestjs/common';
import { CreateStudentDashboardDto } from './dto/create-student-dashboard.dto';
import { UpdateStudentDashboardDto } from './dto/update-student-dashboard.dto';
import { QuizDashboardResponseDto } from './dto/quiz-dashboard-response.dto';

@Injectable()
export class StudentDashboardService {
  // mock data
  private studentQuizzes: QuizDashboardResponseDto[] = [
    { quizId: '123', quizName: 'Intro to REact', duration: 50, closedTime: new Date('2026-07-18T22:00:00'), studentState:  },
    { quizId: '124', quizName: 'Data Structures', duration: 50, closedTime: new Date('2026-07-18T22:00:00'), studentState: '' },
    { quizId: '125', quizName: 'Algorithms', duration: 50, closedTime: new Date('2026-07-18T22:00:00'), studentState: '' },
  ];

  getStudentQuizzes(studentId: string): QuizDashboardResponseDto[] {

    return this.studentQuizzes;
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
