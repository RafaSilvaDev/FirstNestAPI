import { Class, Course } from '@prisma/client';

export type TeacherDTO = {
  id?: string;
  name: string;
  discipline: string;
  courses: Course[];
  classes: Class[];
};
