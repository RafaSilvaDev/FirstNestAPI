import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CourseDTO } from 'src/dto/course.dto';

@Injectable()
export class CoursesRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(params: { includeTeacher: boolean }): Promise<CourseDTO[]> {
    return await this.prisma.course.findMany({
      include: {
        teacher: params.includeTeacher,
      },
    });
  }

  async findOne(params: {
    courseId: string;
    includeTeacher?: boolean;
  }): Promise<CourseDTO> {
    return await this.prisma.course.findUnique({
      where: {
        id: params.courseId,
      },
      include: {
        teacher: params.includeTeacher,
      },
    });
  }

  async create(params: { courseDto: CourseDTO }): Promise<CourseDTO> {
    return await this.prisma.course.create({
      data: params.courseDto,
    });
  }

  async update(params: {
    courseId: string;
    courseDto: CourseDTO;
  }): Promise<void> {
    await this.prisma.course.update({
      data: params.courseDto,
      where: {
        id: params.courseId,
      },
    });
  }

  async delete(params: { courseId: string }): Promise<void> {
    await this.prisma.course.delete({
      where: {
        id: params.courseId,
      },
    });
  }
}
