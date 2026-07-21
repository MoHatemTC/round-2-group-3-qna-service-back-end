// src/analytics/analytics.types.ts

export type StudentStatus = 'invited' | 'started' | 'submitted';

export interface StudentQuizRecord {
  studentId: string;
  status: StudentStatus;
  score: number | null;
}

export interface QuizAnalyticsInput {
  quizId: string;
  title: string;
  passScore?: number | null;
  students: StudentQuizRecord[];
}

export interface CoreCardsOutput {
  invited: number;
  started: number;
  submitted: number;
  completionRate: string | number;
  averageScore: string | number;
  passRate?: string | number;
}