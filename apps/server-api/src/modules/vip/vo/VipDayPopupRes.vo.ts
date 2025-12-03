import { ApiProperty } from '@nestjs/swagger';

export class VipDayPopupResVO {
  @ApiProperty({ description: '商品' })
  goodsName: string;
  @ApiProperty({ description: '商品图' })
  goodsPic: string;
  @ApiProperty({ description: '时间' })
  time: string;
  @ApiProperty({ description: '倍数' })
  times: number;
  @ApiProperty({ description: '今天是否会员日' })
  today: boolean;
  @ApiProperty({ description: '权益身份' })
  type: string;
}
