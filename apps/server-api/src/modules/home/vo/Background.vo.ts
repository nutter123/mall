import { ApiProperty } from '@nestjs/swagger';

export class BackgroundVO {
  @ApiProperty({ description: '背景图' })
  pic: string;
}