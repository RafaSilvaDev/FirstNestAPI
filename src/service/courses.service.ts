import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { CourseDTO } from '../dto/course.dto';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CourseDTO[]> {
    return await this.prisma.course.findMany({
      include: {
        teacher: true,
      },
    });
  }

  async findOne(courseId: string): Promise<CourseDTO> {
    const course = await this.prisma.course.findUnique({
      where: {
        id: courseId,
      },
      include: {
        teacher: true,
      },
    });

    if (!course) {
      throw new HttpException(`Course with id ${courseId} not found.`, 404);
    }

    return course;
  }

  async create(courseDto: CreateCourseDto): Promise<CourseDTO> {
    const course = await this.prisma.course.create({
      data: courseDto,
    });
    return course;
  }

  async update(data: UpdateCourseDto, courseId: string): Promise<CourseDTO> {
    const course = await this.prisma.course.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!course) {
      throw new HttpException(`Course with id ${courseId} not found.`, 404);
    }

    return await this.prisma.course.update({
      data,
      where: {
        id: courseId,
      },
    });
  }

  async delete(courseId: string): Promise<CourseDTO> {
    const course = await this.prisma.course.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!course) {
      throw new HttpException(`Course with id ${courseId} not found.`, 404);
    }

    return await this.prisma.course.delete({
      where: {
        id: courseId,
      },
    });
  }
}
