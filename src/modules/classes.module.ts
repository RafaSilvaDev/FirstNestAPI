import { Module } from '@nestjs/common';
import { ClassesService } from '../service/classes.service';
import { ClassesController } from '../controller/classes.controller';
import { PrismaService } from 'src/database/PrismaService';
import { ClassesRepository } from 'src/repository/classes.repository';

@Module({
  controllers: [ClassesController],
  providers: [ClassesService, ClassesRepository, PrismaService],
})
export class ClassesModule {}
