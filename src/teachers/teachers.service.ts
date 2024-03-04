import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { TeacherDTO } from './dto/teacher.dto';

@Injectable()
export class TeachersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.teacher.findMany();
  }

  async findOne(teacherId: string) {
    const teacher = await this.prisma.teacher.findUnique({
      where: {
        id: teacherId,
      },
    });

    if (!teacher) {
      throw new HttpException(`Teacher with id ${teacherId} not found.`, 404);
    }

    return teacher;
  }

  async create(teacherDto: TeacherDTO) {
    const teacher = await this.prisma.teacher.create({
      data: teacherDto,
    });
    return teacher;
  }

  async update(teacherDto: TeacherDTO, teacherId: string) {
    const teacher = await this.prisma.teacher.findUnique({
      where: {
        id: teacherId,
      },
    });

    if (!teacher) {
      throw new HttpException(`Teacher with id ${teacherId} not found.`, 404);
    }

    return await this.prisma.teacher.update({
      data: teacherDto,
      where: {
        id: teacherId,
      },
    });
  }

  async delete(teacherId: string) {
    const teacher = await this.prisma.teacher.findUnique({
      where: {
        id: teacherId,
      },
    });

    if (!teacher) {
      throw new HttpException(`Teacher with id ${teacherId} not found.`, 404);
    }

    return await this.prisma.teacher.delete({
      where: {
        id: teacherId,
      },
    });
  }
}
