import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClassroomDTO } from '../dto/classroom.dto';
import { ClassroomRepository } from 'src/repository/classrooms.repository';

@Controller('classrooms')
export class ClassroomsController {
  constructor(private readonly repository: ClassroomRepository) {}

  @Get()
  async findAll(): Promise<ClassroomDTO[]> {
    return await this.repository.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') classroomId: string): Promise<ClassroomDTO> {
    return await this.repository.findOne({ classroomId });
  }

  @Post()
  async create(@Body() classroomDto: ClassroomDTO): Promise<ClassroomDTO> {
    return await this.repository.create({ classroomDto });
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id') classroomId: string,
    @Body() classroomDto: ClassroomDTO,
  ): Promise<void> {
    return await this.repository.update({ classroomId, classroomDto });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') classroomId: string): Promise<void> {
    return await this.repository.delete({ classroomId });
  }
}
