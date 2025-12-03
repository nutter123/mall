import { BaseGoodVO } from './BaseGood.vo';
import { ApiProperty } from '@nestjs/swagger';
import {PromotionVO} from "../../promotion/vo/Promotion.vo";

export class GoodVO extends BaseGoodVO {
  @ApiProperty({ description: '会员专区到手价' })
  estimateVipPriceZone: number;
  @ApiProperty({ description: '促销活动' })
  promotionList: PromotionVO[];
}