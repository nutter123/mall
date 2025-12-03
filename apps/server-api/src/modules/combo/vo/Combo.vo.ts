import {ApiProperty} from "@nestjs/swagger";
import {GoodVO} from "../../goods/vo/Good.vo";

export class ComboVO{
  @ApiProperty({ description: '套餐价格' })
  comboPrice: number;

  @ApiProperty({ description: '套餐展示标题' })
  comboTitle: string;

  @ApiProperty({ description: '套餐封面' })
  coverUrl: string;

  @ApiProperty({ description: '是否无效（已抢光）' })
  disable: boolean;

  @ApiProperty({ description: '套餐商品' })
  goodsList: GoodVO[];

  @ApiProperty({ description: '商品价格' })
  goodsPrice: number;

  @ApiProperty({ description: '商品件数' })
  goodsQuantity: number;

  @ApiProperty({ description: '是否隐藏' })
  hide: boolean;

  @ApiProperty({ description: '套餐id' })
  id: number;

  @ApiProperty({ description: '活动限制库存全部可用' })
  limitStockAllQuantity: number;

  @ApiProperty({ description: '活动限制库存每天可用' })
  limitStockDayQuantity: number;

  @ApiProperty({ description: '限制库存不足时隐藏活动（1：是，0：否）' })
  limitStockShortageHide: boolean;

  @ApiProperty({ description: '减免金额' })
  minus: number;

  @ApiProperty({ description: '套餐名称' })
  name: string;
}