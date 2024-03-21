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
import { CoursesService } from '../service/courses.service';
import { CourseDTO } from '../dto/course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async findAll(): Promise<CourseDTO[]> {
    return await this.coursesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CourseDTO> {
    return await this.coursesService.findOne(id);
  }

  @Post()
  async create(@Body() createCourseDto: CourseDTO): Promise<CourseDTO> {
    return await this.coursesService.create(createCourseDto);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id') id: string,
    @Body() updateCourseDto: CourseDTO,
  ): Promise<void> {
    return await this.coursesService.update(updateCourseDto, id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    return await this.coursesService.delete(id);
  }
}
