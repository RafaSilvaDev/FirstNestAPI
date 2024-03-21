import { HttpException, Injectable } from '@nestjs/common';
import { ClassDTO } from '../dto/class.dto';
import { ClassesRepository } from 'src/repository/classes.repository';

@Injectable()
export class ClassesService {
  constructor(private readonly repository: ClassesRepository) {}

  async findAll(): Promise<ClassDTO[]> {
    return await this.repository.findAll();
  }

  async findOne(classId: string): Promise<ClassDTO> {
    const uniqueClass = await this.repository.findOne({ classId });

    if (uniqueClass === null) {
      throw new HttpException(`Class with id ${classId} not found.`, 404);
    }

    return uniqueClass;
  }

  async create(classDto: ClassDTO): Promise<ClassDTO> {
    return await this.repository.create({ classDto });
  }

  async update(classId: string, classDto: ClassDTO): Promise<void> {
    const uniqueClass = await this.repository.findOne({ classId });

    if (!uniqueClass) {
      throw new HttpException(`Class with id ${classId} not found.`, 404);
    }

    return await this.repository.update({ classId, classDto });
  }

  async delete(classId: string): Promise<void> {
    const uniqueClass = await this.repository.findOne({ classId });

    if (!uniqueClass) {
      throw new HttpException(`Class with id ${classId} not found.`, 404);
    }

    return await this.repository.delete({ classId });
  }
}
