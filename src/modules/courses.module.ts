import { Module } from '@nestjs/common';
import { CoursesController } from '../controller/courses.controller';
import { CoursesService } from '../service/courses.service';
import { PrismaService } from 'src/database/PrismaService';
import { CoursesRepository } from 'src/repository/courses.repository';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, CoursesRepository, PrismaService],
  exports: [CoursesService],
})
export class CoursesModule {}
