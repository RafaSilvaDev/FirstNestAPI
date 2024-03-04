import { Class } from '@prisma/client';

export type ClassroomDTO = {
  id?: string;
  name: string;
  capacity: number;
  classes: Class[];
};
