import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ClassroomDTO } from 'src/dto/classroom.dto';

@Injectable()
export class ClassroomRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ClassroomDTO[]> {
    return await this.prisma.classroom.findMany({
      include: {
        Classes: true,
      },
    });
  }

  async findOne(params: { classroomId: string }): Promise<ClassroomDTO> {
    return await this.prisma.classroom.findUnique({
      where: {
        id: params.classroomId,
      },
      include: {
        Classes: true,
      },
    });
  }

  async create(params: { classroomDto: ClassroomDTO }): Promise<ClassroomDTO> {
    return await this.prisma.classroom.create({
      data: params.classroomDto,
    });
  }

  async update(params: {
    classroomId: string;
    classroomDto: ClassroomDTO;
  }): Promise<void> {
    await this.prisma.classroom.update({
      data: params.classroomDto,
      where: {
        id: params.classroomId,
      },
    });
  }

  async delete(params: { classroomId: string }): Promise<void> {
    await this.prisma.classroom.delete({
      where: {
        id: params.classroomId,
      },
    });
  }
}
