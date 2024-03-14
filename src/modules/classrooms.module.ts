import { Module } from '@nestjs/common';
import { ClassroomsService } from '../service/classrooms.service';
import { ClassroomsController } from '../controller/classrooms.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ClassroomsController],
  providers: [ClassroomsService, PrismaService],
})
export class ClassroomsModule {}
