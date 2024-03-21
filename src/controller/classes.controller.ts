import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClassesService } from '../service/classes.service';
import { ClassDTO } from '../dto/class.dto';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get()
  async findAll(): Promise<ClassDTO[]> {
    return await this.classesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ClassDTO> {
    return await this.classesService.findOne(id);
  }

  @Post()
  async create(@Body() classDto: ClassDTO): Promise<ClassDTO> {
    return await this.classesService.create(classDto);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id') id: string,
    @Body() classDto: ClassDTO,
  ): Promise<void> {
    return await this.classesService.update(id, classDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<void> {
    return await this.classesService.delete(id);
  }
}
