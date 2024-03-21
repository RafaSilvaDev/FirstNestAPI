import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ClassDTO } from 'src/dto/class.dto';

@Injectable()
export class ClassesRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ClassDTO[]> {
    return await this.prisma.class.findMany({
      include: {
        classroom: true,
        teacher: true,
      },
    });
  }

  async findOne(params: { classId: string }): Promise<ClassDTO> {
    return await this.prisma.class.findUnique({
      where: {
        id: params.classId,
      },
      include: {
        classroom: true,
        teacher: true,
      },
    });
  }

  async create(params: { classDto: ClassDTO }): Promise<ClassDTO> {
    return await this.prisma.class.create({
      data: params.classDto,
    });
  }

  async update(params: { classId: string; classDto: ClassDTO }): Promise<void> {
    await this.prisma.class.update({
      data: params.classDto,
      where: {
        id: params.classId,
      },
    });
  }

  async delete(params: { classId: string }): Promise<void> {
    await this.prisma.class.delete({
      where: {
        id: params.classId,
      },
    });
  }
}
