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
import { TeachersService } from '../service/teachers.service';
import { TeacherDTO } from '../dto/teacher.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  async findAll(): Promise<TeacherDTO[]> {
    return await this.teachersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TeacherDTO> {
    return await this.teachersService.findOne(id);
  }

  @Post()
  async create(@Body() createTeacherDto: TeacherDTO): Promise<TeacherDTO> {
    return await this.teachersService.create(createTeacherDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id') id: string,
    @Body() updateTeacherDto: TeacherDTO,
  ): Promise<void> {
    return await this.teachersService.update(updateTeacherDto, id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    return await this.teachersService.delete(id);
  }
}
