import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(userData: any) {
    return await this.prisma.user.create({
      data: {
        ...userData,
        role: 'student', 
      },
    });
  }
}
