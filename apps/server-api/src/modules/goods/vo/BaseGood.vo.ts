import { BaseVO } from '../../../common/dto/base-vo';
import { ApiProperty } from '@nestjs/swagger';

export class BaseGoodVO extends BaseVO {
  @ApiProperty({ description: '销售名称' })
  saleName: string;

  @ApiProperty({ description: '销售价格' })
  price: number;

  @ApiProperty({ description: '会员价' })
  vipPrice: number;

  @ApiProperty({ description: '主图' })
  imgUrl: string;

  @ApiProperty({ description: '非动图主图' })
  imgUrlNotGif: string;

  @ApiProperty({ description: 'spu_id' })
  spuId: number;

  @ApiProperty({ description: '到手价' })
  estimatePrice: number;

  @ApiProperty({ description: '商品状态' })
  status: number;

  @ApiProperty({ description: '是否会员价' })
  vipPriceSts: boolean;

  @ApiProperty({ description: '用户是否为会员' })
  userVip: boolean;

  @ApiProperty({ description: '用户是否享受会员价' })
  userVipPrice: boolean;

  @ApiProperty({ description: '商品背景色' })
  backgroundColor: string;
}
