import { ApiProperty } from '@nestjs/swagger';

export class BaseEntityVO {
  @ApiProperty({
    description: 'id',
  })
  id: number;
}
