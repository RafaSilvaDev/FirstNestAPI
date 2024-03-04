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
import { ClassroomsService } from './classrooms.service';
import { ClassroomDTO } from './dto/classroom.dto';

@Controller('classrooms')
export class ClassroomsController {
  constructor(private readonly classroomsService: ClassroomsService) {}

  @Get()
  async findAll() {
    return this.classroomsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.classroomsService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  async create(@Body() classroomDto: ClassroomDTO) {
    return this.classroomsService.create(classroomDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() classroomDto: ClassroomDTO) {
    return this.classroomsService.update(id, classroomDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.classroomsService.delete(id);
  }
}
