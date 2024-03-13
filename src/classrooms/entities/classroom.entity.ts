import { ApiProperty } from '@nestjs/swagger';
import { Class } from '@prisma/client';

export class Classroom {
  id?: string;
  @ApiProperty({
    example: 'Sala de Informática',
    description: 'The name of the classroom.',
  })
  name: string;
  @ApiProperty({
    example: 40,
    description: 'Maximum permited to be in the classroom.',
  })
  capacity: number;
  @ApiProperty({
    description: 'Classes made on this classroom.',
  })
  classes?: Class[];
}
