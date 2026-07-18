import { Test, TestingModule } from '@nestjs/testing';
import { StudentDashboardService } from './student-dashboard.service';
import { PrismaService } from '../prisma/prisma.service';

describe('StudentDashboardService', () => {
  let service: StudentDashboardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentDashboardService,
        {
          provide: PrismaService,
          useValue: {}, // Mock the PrismaService
        }
      ],
    }).compile();

    service = module.get<StudentDashboardService>(StudentDashboardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
