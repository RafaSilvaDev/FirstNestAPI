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
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseDTO } from './dto/course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async findAll(): Promise<CourseDTO[]> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CourseDTO> {
    return this.coursesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  async create(@Body() createCourseDto: CreateCourseDto): Promise<CourseDTO> {
    return this.coursesService.create(createCourseDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ): Promise<CourseDTO> {
    return this.coursesService.update(updateCourseDto, id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<CourseDTO> {
    return this.coursesService.delete(id);
  }
}
