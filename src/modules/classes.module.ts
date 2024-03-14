import { Module } from '@nestjs/common';
import { ClassesService } from '../service/classes.service';
import { ClassesController } from '../controller/classes.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ClassesController],
  providers: [ClassesService, PrismaService],
})
export class ClassesModule {}
