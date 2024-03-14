import { Module } from '@nestjs/common';
import { CoursesController } from '../controller/courses.controller';
import { CoursesService } from '../service/courses.service';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, PrismaService],
})
export class CoursesModule {}
