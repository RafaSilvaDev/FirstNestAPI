import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ClassroomDTO } from './dto/classroom.dto';

@Injectable()
export class ClassroomsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ClassroomDTO[]> {
    return await this.prisma.classroom.findMany();
  }

  async findOne(classroomId: string): Promise<ClassroomDTO> {
    const classroom = await this.prisma.classroom.findUnique({
      where: {
        id: classroomId,
      },
    });

    if (!classroom) {
      throw new HttpException(
        `Classroom with id ${classroomId} not found.`,
        404,
      );
    }

    return classroom;
  }

  async create(classroomDto: ClassroomDTO): Promise<ClassroomDTO> {
    return await this.prisma.classroom.create({
      data: classroomDto,
    });
  }

  async update(
    classroomId: string,
    clasroomDto: ClassroomDTO,
  ): Promise<ClassroomDTO> {
    const classroom = await this.prisma.classroom.findUnique({
      where: {
        id: classroomId,
      },
    });

    if (!classroom) {
      throw new HttpException(
        `Classroom with id ${classroomId} not found.`,
        404,
      );
    }

    return await this.prisma.classroom.update({
      data: clasroomDto,
      where: {
        id: classroomId,
      },
    });
  }

  async delete(classroomId: string): Promise<ClassroomDTO> {
    const classroom = await this.prisma.classroom.findUnique({
      where: {
        id: classroomId,
      },
    });

    if (!classroom) {
      throw new HttpException(
        `Classroom with id ${classroomId} not found.`,
        404,
      );
    }

    return await this.prisma.classroom.delete({
      where: {
        id: classroomId,
      },
    });
  }
}
