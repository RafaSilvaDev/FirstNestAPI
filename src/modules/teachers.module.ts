import { Module } from '@nestjs/common';
import { TeachersController } from '../controller/teachers.controller';
import { TeachersService } from '../service/teachers.service';
import { PrismaService } from 'src/database/PrismaService';
import { TeachersRepository } from 'src/repository/teachers.repository';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService, TeachersRepository, PrismaService],
})
export class TeachersModule {}
