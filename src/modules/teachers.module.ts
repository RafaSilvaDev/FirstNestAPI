import { Module } from '@nestjs/common';
import { TeachersController } from '../controller/teachers.controller';
import { TeachersService } from '../service/teachers.service';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService, PrismaService],
})
export class TeachersModule {}
