import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // بيربط بالـ Prisma اللي الدكتور عامله

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(userData: any) {
    // هنا بنسجل اليوزر وبنثبت الـ role على 'student' زي ما طلبت
    return await this.prisma.user.create({
      data: {
        ...userData,
        role: 'student', 
      },
    });
  }
}