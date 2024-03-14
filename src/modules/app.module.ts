import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { CoursesModule } from './courses.module';
import { TeachersController } from '../controller/teachers.controller';
import { TeachersService } from '../service/teachers.service';
import { TeachersModule } from './teachers.module';
import { CoursesController } from '../controller/courses.controller';
import { CoursesService } from '../service/courses.service';
import { PrismaService } from '../database/PrismaService';
import { ClassesModule } from './classes.module';
import { ClassroomsModule } from './classrooms.module';
import { ClassroomsController } from '../controller/classrooms.controller';
import { ClassroomsService } from '../service/classrooms.service';

@Module({
  imports: [CoursesModule, TeachersModule, ClassesModule, ClassroomsModule],
  controllers: [
    AppController,
    TeachersController,
    CoursesController,
    ClassroomsController,
  ],
  providers: [
    AppService,
    PrismaService,
    TeachersService,
    CoursesService,
    ClassroomsService,
  ],
})
export class AppModule {}
