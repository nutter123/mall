import {ApiProperty} from "@nestjs/swagger";
import {CalcGoodsDTO} from "./CalcGoods.dto";
import {SuperValueDTO} from "./SuperValue.dto";

export class BuyCalcDTO{
  @ApiProperty({ description: '是否接受转让' })
  acceptTransfer: boolean;

  @ApiProperty({ description: '地址ID' })
  addressId: number;

  @ApiProperty({ description: '是否自动使用优惠券详情' })
  autoCouponDetail: boolean;

  @ApiProperty({ description: '预约时间' })
  bookDateTime: string;

  @ApiProperty({ description: '计算商品列表' })
  calcGoodsList: CalcGoodsDTO[];

  @ApiProperty({ description: '套餐数量' })
  comboQuantity: number
  @ApiProperty({ description: '优惠券详情ID' })
  couponDetailId: number;

  @ApiProperty({ description: '配送代码ID' })
  distributionCodeId: number;

  @ApiProperty({ description: '是否开通SVIP' })
  openSvip: boolean;

  @ApiProperty({ description: '开通SVIP的ID' })
  openSvipId: number;

  @ApiProperty({ description: '其他服务列表' })
  otherService: object[];

  @ApiProperty({ description: '支付密码' })
  payPassword: string;

  @ApiProperty({ description: '人数' })
  peopleNum: number;

  @ApiProperty({ description: '零售商' })
  retailer: number;

  @ApiProperty({ description: '零售商用户ID' })
  retailerUserId: number;

  @ApiProperty({ description: '店铺库存不足商品ID列表' })
  shopNotEnoughGoodsId: object[];

  @ApiProperty({ description: '站点ID' })
  siteId: number;

  @ApiProperty({ description: '超值购列表' })
  superValueList: SuperValueDTO[];

  @ApiProperty({ description: '追踪ID' })
  traceId: string;

  @ApiProperty({ description: '是否使用积分' })
  useIntegral: boolean;
}