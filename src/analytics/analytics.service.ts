// src/analytics/analytics.service.ts

import { Injectable } from '@nestjs/common';
import { QuizAnalyticsInput, CoreCardsOutput } from './analytics.types';

@Injectable()

export class AnalyticsService {
  getCoreCards(quizData: QuizAnalyticsInput): CoreCardsOutput {
    const students = quizData.students || [];
    
    const invited = students.length;
    const started = students.filter(s => s.status === 'started' || s.status === 'submitted').length;
    const submitted = students.filter(s => s.status === 'submitted').length;

    if (started === 0) {
      const output: CoreCardsOutput = {
        invited,
        started: 0,
        submitted: 0,
        completionRate: 'No attempts recorded yet',
        averageScore: 'No attempts recorded yet',
      };

      if (quizData.passScore !== undefined && quizData.passScore !== null) {
        output.passRate = 'No attempts recorded yet';
      }

      return output;
    }

    // حساب Completion Rate
    const completionRateVal = Math.round((submitted / invited) * 100);
    const completionRate = `${completionRateVal}%`;

    const scoredStudents = students.filter(s => s.score !== null && s.score !== undefined);
    let averageScore: string | number = 'N/A';
    
    if (scoredStudents.length > 0) {
      const totalScore = scoredStudents.reduce((acc, curr) => acc + (curr.score ?? 0), 0);
      averageScore = +(totalScore / scoredStudents.length).toFixed(1);
    }

    const result: CoreCardsOutput = {
      invited,
      started,
      submitted,
      completionRate,
      averageScore,
    };

    
    if (quizData.passScore !== undefined && quizData.passScore !== null) {
      if (scoredStudents.length > 0) {
        const passedCount = scoredStudents.filter(s => (s.score ?? 0) >= quizData.passScore!).length;
        const passRateVal = Math.round((passedCount / scoredStudents.length) * 100);
        result.passRate = `${passRateVal}%`;
      } else {
        result.passRate = '0%';
      }
    }

    return result;
  }
}