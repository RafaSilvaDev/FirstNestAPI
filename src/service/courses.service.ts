import { HttpException, Injectable } from '@nestjs/common';
import { CourseDTO } from '../dto/course.dto';
import { CoursesRepository } from 'src/repository/courses.repository';

@Injectable()
export class CoursesService {
  constructor(private repository: CoursesRepository) {}

  async findAll(): Promise<CourseDTO[]> {
    return await this.repository.findAll({ includeTeacher: true });
  }

  async findOne(courseId: string): Promise<CourseDTO> {
    const course = await this.repository.findOne({
      courseId,
      includeTeacher: true,
    });

    if (!course) {
      throw new HttpException(`Course with id ${courseId} not found.`, 404);
    }

    return course;
  }

  async create(courseDto: CourseDTO): Promise<CourseDTO> {
    return await this.repository.create({ courseDto });
  }

  async update(courseDto: CourseDTO, courseId: string): Promise<void> {
    const course = await this.repository.findOne({ courseId });

    if (!course) {
      throw new HttpException(`Course with id ${courseId} not found.`, 404);
    }

    return await this.repository.update({
      courseId,
      courseDto,
    });
  }

  async delete(courseId: string): Promise<void> {
    const course = await this.repository.findOne({ courseId });

    if (!course) {
      throw new HttpException(`Course with id ${courseId} not found.`, 404);
    }

    return await this.repository.delete({ courseId });
  }
}
