import { ApiProperty } from '@nestjs/swagger';

export class PictureAdAreasVO {
  @ApiProperty({ description: 'ID' })
  id: string;

  @ApiProperty({ description: '区域' })
  area: string;

  @ApiProperty({ description: '名称' })
  name: string;

  @ApiProperty({ description: '链接类型' })
  linkType: string;

  @ApiProperty({ description: '链接值' })
  linkValue: string;

  @ApiProperty({ description: '区域备注' })
  areaRem: string;
}