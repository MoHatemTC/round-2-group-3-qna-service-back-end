import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDashboardDto } from './create-student-dashboard.dto';

export class UpdateStudentDashboardDto extends PartialType(CreateStudentDashboardDto) {
    studentId: string;

}
