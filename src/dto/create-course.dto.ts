import { IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  readonly id?: string;
  @IsString()
  readonly name: string;
  @IsString()
  readonly description: string;
  @IsString({ each: true })
  readonly tags: string[];
  @IsString()
  readonly teacherId: string;
}