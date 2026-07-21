# Handover Note: Analytics Core Cards (Slot 5 Integration)

To: Slot 5 Team
From: Abdelrahman
Subject: Analytics Core Cards Calculation Handover

This note outlines the core metrics computed on our end for the Analytics Core Cards to prevent duplicate development.

### Computed Metrics:
1. **Invited**: Total count of assigned students.
2. **Started**: Count of students with status 'started' or 'submitted'.
3. **Submitted**: Count of students who successfully submitted.
4. **Completion Rate**: Percentage of submissions relative to invitations (handled zero-state with a written message when attempts = 0).
5. **Average Score**: Calculated strictly from students with active non-null scores.
6. **Pass Rate**: Dynamically computed and displayed **only** for quizzes carrying a valid `passScore`.
7. **Score Precision**: Student cells maintain `null` (empty) state instead of defaulting to `0` when the student has not started.