import { ApiProperty } from '@nestjs/swagger';

export class RecommendZoneVO {
  @ApiProperty({ description: 'ID' })
  id: string;

  @ApiProperty({ description: '名称' })
  name: string;

  @ApiProperty({ description: '名称图片' })
  namePic: string;

  @ApiProperty({ description: '名称类型' })
  nameType: string;

  @ApiProperty({ description: '副标题' })
  subhead: string;

  @ApiProperty({ description: '类型' })
  type: string;

  @ApiProperty({ description: '显示数量' })
  showNum: number;

  @ApiProperty({ description: '链接类型' })
  linkType: string;

  @ApiProperty({ description: '链接值' })
  linkValue: string;

  @ApiProperty({ description: '链接名称' })
  linkName: string;

  @ApiProperty({ description: '是否显示' })
  display: boolean;

  @ApiProperty({ description: '排序' })
  sort: number;

  @ApiProperty({ description: '订单分类ID' })
  orderCategoryId: string;

  @ApiProperty({ description: '是否有传感器' })
  haveSensors: boolean;
}