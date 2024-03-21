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
import { CoursesRepository } from 'src/repository/courses.repository';
import { TeachersRepository } from 'src/repository/teachers.repository';
import { ClassroomRepository } from 'src/repository/classrooms.repository';
import { ClassesService } from 'src/service/classes.service';
import { ClassesRepository } from 'src/repository/classes.repository';
import { ClassesController } from 'src/controller/classes.controller';

@Module({
  imports: [CoursesModule, TeachersModule, ClassesModule, ClassroomsModule],
  controllers: [
    AppController,
    TeachersController,
    CoursesController,
    ClassroomsController,
    ClassesController,
  ],
  providers: [
    AppService,
    PrismaService,
    TeachersService,
    TeachersRepository,
    CoursesService,
    CoursesRepository,
    ClassroomsService,
    ClassroomRepository,
    ClassesService,
    ClassesRepository,
  ],
})
export class AppModule {}
