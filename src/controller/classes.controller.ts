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
    return this.classesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ClassDTO> {
    return this.classesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  async create(@Body() classDto: ClassDTO): Promise<ClassDTO> {
    return this.classesService.create(classDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() classDto: ClassDTO,
  ): Promise<ClassDTO> {
    return this.classesService.update(id, classDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string): Promise<ClassDTO> {
    return this.classesService.delete(id);
  }
}
