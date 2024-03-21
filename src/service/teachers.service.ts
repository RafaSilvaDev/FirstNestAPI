import { HttpException, Injectable } from '@nestjs/common';
import { TeacherDTO } from '../dto/teacher.dto';
import { TeachersRepository } from 'src/repository/teachers.repository';

@Injectable()
export class TeachersService {
  constructor(private repository: TeachersRepository) {}

  async findAll(): Promise<TeacherDTO[]> {
    return await this.repository.findAll();
  }

  async findOne(teacherId: string): Promise<TeacherDTO> {
    const teacher = await this.repository.findOne({ teacherId });

    if (!teacher) {
      throw new HttpException(`Teacher with id ${teacherId} not found.`, 404);
    }

    return teacher;
  }

  async create(teacherDto: TeacherDTO): Promise<TeacherDTO> {
    return await this.repository.create({ teacherDto });
  }

  async update(teacherDto: TeacherDTO, teacherId: string): Promise<void> {
    const teacher = await this.repository.findOne({ teacherId });

    if (!teacher) {
      throw new HttpException(`Teacher with id ${teacherId} not found.`, 404);
    }

    return await this.repository.update({ teacherId, teacherDto });
  }

  async delete(teacherId: string): Promise<void> {
    const teacher = await this.repository.findOne({ teacherId });

    if (!teacher) {
      throw new HttpException(`Teacher with id ${teacherId} not found.`, 404);
    }

    return await this.repository.delete({ teacherId });
  }
}
