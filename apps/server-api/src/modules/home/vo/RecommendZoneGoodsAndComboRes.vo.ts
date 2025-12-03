import {ApiProperty} from "@nestjs/swagger";
import {GoodVO} from "../../goods/vo/Good.vo";
import {ComboVO} from "../../combo/vo/Combo.vo";

export class RecommendZoneGoodsAndComboResVO{
  @ApiProperty({ description: '套餐列表' })
  comboList: ComboVO[];
  
  @ApiProperty({ description: '商品基础活动信息(活动只包含名称)' })
  goodsList: GoodVO[];
  
  @ApiProperty({ description: '类型(goods-商品,combo-套餐)' })
  recommendType: string;
  
  @ApiProperty({ description: '排序' })
  sort: number;
}