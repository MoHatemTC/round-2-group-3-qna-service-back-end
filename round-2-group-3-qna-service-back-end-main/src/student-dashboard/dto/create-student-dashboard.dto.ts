import { IsDate, IsEnum, IsString } from 'class-validator';

export class CreateStudentDashboardDto {
    @IsString()
    studentId: string;

    @IsString()
    quizId: string;

    @IsEnum(['Not started', 'In progress', 'Submitted', 'Auto-submitted'])
    status: string;

    @IsDate()
    scheduledStart?: Date;

    @IsDate()
    scheduledEnd?: Date;

    @IsDate()
    actualStart?: Date;

    @IsDate()
    actualEnd?: Date;
}
