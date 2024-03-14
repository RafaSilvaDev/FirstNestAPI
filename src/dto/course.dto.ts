import { Teacher } from '@prisma/client';

export type CourseDTO = {
  id?: string;
  name: string;
  description: string;
  tags: string[];
  teacherId: string;
  teacher?: Teacher;
};
