import {ApiProperty} from "@nestjs/swagger";
import {PromotionVO} from "../../promotion/vo/Promotion.vo";
import {GoodsSplitListVO} from "./GoodsSplitList.vo";

export class GoodsListVO {
  @ApiProperty({description: 'SPU ID'})
  spuId: string;

  @ApiProperty({description: '商品ID'})
  goodsId: string;

  @ApiProperty({description: '商品数量'})
  goodsQuantity: number;

  @ApiProperty({description: '冻结数量'})
  frozenQuantity: number;

  @ApiProperty({description: '是否禁用'})
  disable: boolean;

  @ApiProperty({description: '禁用原因'})
  disableReason: any;

  @ApiProperty({description: '是否限制出库'})
  limitOut: boolean;

  @ApiProperty({description: '限制出库原因'})
  limitOutReason: any;

  @ApiProperty({description: '销售名称'})
  saleName: string;

  @ApiProperty({description: '详情描述'})
  deDetails: string;

  @ApiProperty({description: '价格'})
  price: number;

  @ApiProperty({description: '图片URL'})
  imgUrl: string;

  @ApiProperty({description: '背景颜色'})
  backgroundColor: string;

  @ApiProperty({description: '非GIF图片URL'})
  imgUrlNotGif: string;

  @ApiProperty({description: '销售规格名称'})
  saleSpecName: string;

  @ApiProperty({description: '规格数量'})
  specNum: number;

  @ApiProperty({description: '规格名称'})
  specName: string;

  @ApiProperty({description: '一级分类ID'})
  firstCategoryId: string;

  @ApiProperty({description: '一级分类名称'})
  firstCategoryName: string;

  @ApiProperty({description: '是否正品'})
  authentic: boolean;

  @ApiProperty({description: '是否极速发货'})
  speedDelivery: boolean;

  @ApiProperty({description: '是否超时赔付'})
  overtimePayment: boolean;

  @ApiProperty({description: '是否支持货到付款'})
  cashOnDelivery: boolean;

  @ApiProperty({description: '是否冻结'})
  frozen: boolean;

  @ApiProperty({description: '商品拆分列表'})
  goodsSplitList: GoodsSplitListVO[];

  @ApiProperty({description: '是否赠品'})
  gift: boolean;

  @ApiProperty({description: '是否超值'})
  superValue: boolean;

  @ApiProperty({description: '是否可使用优惠券'})
  useCoupon: boolean;

  @ApiProperty({description: '积分'})
  integral: number;

  @ApiProperty({description: '是否会员日标识'})
  memberDayFlag: boolean;

  @ApiProperty({description: '促销列表'})
  promotionList: PromotionVO[];

  @ApiProperty({description: '是否加购'})
  addBuy: boolean;

  @ApiProperty({description: '是否加购超值'})
  addSuperValue: boolean;

  @ApiProperty({description: '其他服务'})
  otherService: any;

  @ApiProperty({description: '其他服务标签'})
  otherServiceLabel: any;
}