import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentDashboardService } from './student-dashboard.service';
import { CreateStudentDashboardDto } from './dto/create-student-dashboard.dto';
import { UpdateStudentDashboardDto } from './dto/update-student-dashboard.dto';

@Controller('student-dashboard')
export class StudentDashboardController {
  constructor(private readonly studentDashboardService: StudentDashboardService) {}

  @Post()
  create(@Body() createStudentDashboardDto: CreateStudentDashboardDto) {
    return this.studentDashboardService.create(createStudentDashboardDto);
  }

  @Get()
  findAll() {
    return this.studentDashboardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentDashboardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDashboardDto: UpdateStudentDashboardDto) {
    return this.studentDashboardService.update(+id, updateStudentDashboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentDashboardService.remove(+id);
  }
}
