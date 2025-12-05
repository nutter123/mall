import { ApiProperty } from '@nestjs/swagger';

export class BaseVO {
  @ApiProperty({
    description: 'id',
  })
  id: string;

  @ApiProperty({
    description: '创建时间',
  })
  createdAt: Date;
}
