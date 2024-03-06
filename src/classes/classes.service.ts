import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ClassDTO } from './dto/class.dto';

@Injectable()
export class ClassesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<ClassDTO[]> {
    return await this.prisma.class.findMany({
      include: {
        teacher: true,
        classroom: true,
      },
    });
  }

  async findOne(classId: string): Promise<ClassDTO> {
    const uniqueClass = await this.prisma.class.findUnique({
      where: {
        id: classId,
      },
      include: {
        teacher: true,
        classroom: true,
      },
    });

    if (!uniqueClass) {
      throw new HttpException(`Class with id ${classId} not found.`, 404);
    }

    return uniqueClass;
  }

  async create(classDto: ClassDTO): Promise<ClassDTO> {
    return await this.prisma.class.create({
      data: classDto,
    });
  }

  async update(classId: string, classDto: ClassDTO): Promise<ClassDTO> {
    const uniqueClass = await this.prisma.class.findUnique({
      where: {
        id: classId,
      },
    });

    if (!uniqueClass) {
      throw new HttpException(`Class with id ${classId} not found.`, 404);
    }

    return await this.prisma.class.update({
      data: classDto,
      where: {
        id: classId,
      },
    });
  }

  async delete(classId: string): Promise<ClassDTO> {
    const uniqueClass = await this.prisma.class.findUnique({
      where: {
        id: classId,
      },
    });

    if (!uniqueClass) {
      throw new HttpException(`Class with id ${classId} not found.`, 404);
    }

    return await this.prisma.class.delete({
      where: {
        id: classId,
      },
    });
  }
}
