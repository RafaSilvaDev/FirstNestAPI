import { Module } from '@nestjs/common';
import { ClassroomsService } from '../service/classrooms.service';
import { ClassroomsController } from '../controller/classrooms.controller';
import { PrismaService } from 'src/database/PrismaService';
import { ClassroomRepository } from 'src/repository/classrooms.repository';

@Module({
  controllers: [ClassroomsController],
  providers: [ClassroomsService, ClassroomRepository, PrismaService],
})
export class ClassroomsModule {}
