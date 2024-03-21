import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { TeacherDTO } from 'src/dto/teacher.dto';

@Injectable()
export class TeachersRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<TeacherDTO[]> {
    return await this.prisma.teacher.findMany();
  }

  async findOne(params: { teacherId: string }): Promise<TeacherDTO> {
    return await this.prisma.teacher.findUnique({
      where: {
        id: params.teacherId,
      },
    });
  }

  async create(params: { teacherDto: TeacherDTO }): Promise<TeacherDTO> {
    return await this.prisma.teacher.create({
      data: params.teacherDto,
    });
  }

  async update(params: {
    teacherId: string;
    teacherDto: TeacherDTO;
  }): Promise<void> {
    await this.prisma.teacher.update({
      where: {
        id: params.teacherId,
      },
      data: params.teacherDto,
    });
  }

  async delete(params: { teacherId: string }): Promise<void> {
    await this.prisma.teacher.delete({
      where: {
        id: params.teacherId,
      },
    });
  }
}
