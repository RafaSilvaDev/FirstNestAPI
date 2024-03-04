import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TeachersController } from './teachers/teachers.controller';
import { TeachersService } from './teachers/teachers.service';
import { TeachersModule } from './teachers/teachers.module';
import { CoursesController } from './courses/courses.controller';
import { CoursesService } from './courses/courses.service';
import { PrismaService } from './database/PrismaService';
import { ClassesModule } from './classes/classes.module';
import { ClassroomsModule } from './classrooms/classrooms.module';
import { ClassroomsController } from './classrooms/classrooms.controller';
import { ClassroomsService } from './classrooms/classrooms.service';

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
