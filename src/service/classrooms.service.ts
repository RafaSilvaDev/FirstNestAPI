import { HttpException, Injectable } from '@nestjs/common';
import { ClassroomDTO } from '../dto/classroom.dto';
import { ClassroomRepository } from 'src/repository/classrooms.repository';

@Injectable()
export class ClassroomsService {
  constructor(private repository: ClassroomRepository) {}

  async findAll(): Promise<ClassroomDTO[]> {
    return await this.repository.findAll();
  }

  async findOne(classroomId: string): Promise<ClassroomDTO> {
    const classroom = await this.repository.findOne({ classroomId });

    if (!classroom) {
      throw new HttpException(
        `Classroom with id ${classroomId} not found.`,
        404,
      );
    }

    return classroom;
  }

  async create(classroomDto: ClassroomDTO): Promise<ClassroomDTO> {
    return await this.repository.create({ classroomDto });
  }

  async update(classroomId: string, classroomDto: ClassroomDTO): Promise<void> {
    const classroom = await this.repository.findOne({ classroomId });

    if (!classroom) {
      throw new HttpException(
        `Classroom with id ${classroomId} not found.`,
        404,
      );
    }

    return await this.repository.update({ classroomId, classroomDto });
  }

  async delete(classroomId: string): Promise<void> {
    const classroom = await this.repository.findOne({ classroomId });

    if (!classroom) {
      throw new HttpException(
        `Classroom with id ${classroomId} not found.`,
        404,
      );
    }

    return await this.repository.delete({ classroomId });
  }
}
