import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeacherDTO } from './dto/teacher.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  async findAll(): Promise<TeacherDTO[]> {
    return this.teachersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TeacherDTO> {
    return this.teachersService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  async create(@Body() createTeacherDto: TeacherDTO): Promise<TeacherDTO> {
    return this.teachersService.create(createTeacherDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTeacherDto: TeacherDTO,
  ): Promise<TeacherDTO> {
    return this.teachersService.update(updateTeacherDto, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TeacherDTO> {
    return this.teachersService.delete(id);
  }
}
