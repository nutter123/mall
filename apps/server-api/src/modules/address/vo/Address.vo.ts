import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

export class AddressVO {
  @ApiProperty({ description: 'ID' })
  id: number;

  @ApiProperty({ description: '用户ID' })
  userId: number;

  @ApiProperty({ description: '详细地址' })
  addressDetail: string;

  @ApiProperty({ description: '省份' })
  province: string;

  @ApiProperty({ description: '城市' })
  city: string;

  @ApiProperty({ description: '区县' })
  district: string;

  @ApiProperty({ description: '纬度' })
  latitude: number;

  @ApiProperty({ description: '经度' })
  longitude: number;

  @ApiProperty({ description: '称呼' })
  name: string;

  @ApiProperty({ description: '手机号' })
  phone: string;

  @ApiProperty({ description: '性别' })
  gender: string;

  @ApiProperty({ description: '地址标签' })
  label: string;

  @ApiProperty({ description: 'POI类型' })
  type: string;

  @ApiProperty({ description: 'POI类型编码' })
  typeCode: string;

  @ApiProperty({ description: 'POI名称' })
  poipoistring: string;

  @ApiProperty({ description: '用途分类' })
  useType: string;

  @ApiProperty({ description: '关联门店ID' })
  shopId: number;

  @ApiProperty({ description: '使用次数' })
  usageCount: number;

  @ApiProperty({ description: '最后使用时间' })
  lastUsedDate: Date;

  @ApiProperty({ description: '创建时间' })
  createdDate: Date;

  @ApiProperty({ description: '地址备注' })
  remark: string;
}
