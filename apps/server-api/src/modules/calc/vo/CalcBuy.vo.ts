import { ApiProperty } from '@nestjs/swagger';
import { PayConfigVO } from './PayConfig.vo';
import { GoodsListVO } from '../../goods/vo/GoodsList.vo';
import { BookDetailGroupVO } from './BookDetailGroup.vo';
import { CouponDetailVO } from '../../coupon/vo/CouponDetail.vo';
import { MinusListVO } from './MinusList.vo';

export class CalcBuyVO {
  @ApiProperty({ description: 'businessOpen' })
  businessOpen: string;

  @ApiProperty({ description: 'deliveryTime' })
  deliveryTime: number;

  @ApiProperty({ description: 'peakPeriodMoney' })
  peakPeriodMoney: number;

  @ApiProperty({ description: 'unPeakPeriodMoney' })
  unPeakPeriodMoney: number;

  @ApiProperty({ description: 'svipSite' })
  svipSite: boolean;

  @ApiProperty({ description: 'svipUser' })
  svipUser: boolean;

  @ApiProperty({ description: 'newUser' })
  newUser: boolean;

  @ApiProperty({ description: 'godSite' })
  godSite: boolean;

  @ApiProperty({ description: 'godUser' })
  godUser: boolean;

  @ApiProperty({ description: 'godUserFast' })
  godUserFast: boolean;

  @ApiProperty({ description: 'business' })
  business: boolean;

  @ApiProperty({ description: 'peakTime' })
  peakTime: boolean;

  @ApiProperty({ description: 'reservation' })
  reservation: boolean;

  @ApiProperty({ description: 'reservationStartTime' })
  reservationStartTime: string;

  @ApiProperty({ description: 'openStatusNew' })
  openStatusNew: number;

  @ApiProperty({ description: 'invoiceType' })
  invoiceType: string;

  @ApiProperty({ description: 'invoiceSpecialType' })
  invoiceSpecialType: string;

  @ApiProperty({ description: 'provideSpecialTicke' })
  provideSpecialTicke: boolean;

  @ApiProperty({ description: 'payConfigVo' })
  payConfigVo: PayConfigVO;

  @ApiProperty({ description: 'shopBase' })
  shopBase: object | null;

  @ApiProperty({ description: 'goodsList' })
  goodsList: GoodsListVO[];

  @ApiProperty({ description: 'superValueGoodsList' })
  superValueGoodsList: object[];

  @ApiProperty({ description: 'tableEssentialList' })
  tableEssentialList: object[];

  @ApiProperty({ description: 'addBuyList' })
  addBuyList: object[];

  @ApiProperty({ description: 'superValuePayMoney' })
  superValuePayMoney: number;

  @ApiProperty({ description: 'superValuePayMoney1' })
  superValuePayMoney1: number;

  @ApiProperty({ description: 'bookDetailGroupList' })
  bookDetailGroupList: BookDetailGroupVO[];

  @ApiProperty({ description: 'couponDetailList' })
  couponDetailList: CouponDetailVO[];

  @ApiProperty({ description: 'banCouponDetailList' })
  banCouponDetailList: object[];

  @ApiProperty({ description: 'authentic' })
  authentic: boolean;

  @ApiProperty({ description: 'speedDelivery' })
  speedDelivery: boolean;

  @ApiProperty({ description: 'overtimePayment' })
  overtimePayment: boolean;

  @ApiProperty({ description: 'cashOnDelivery' })
  cashOnDelivery: boolean;

  @ApiProperty({ description: 'frozen' })
  frozen: boolean;

  @ApiProperty({ description: 'totalQuantity' })
  totalQuantity: number;

  @ApiProperty({ description: 'totalMoney' })
  totalMoney: number;

  @ApiProperty({ description: 'promotionMoney' })
  promotionMoney: number;

  @ApiProperty({ description: 'payMoney' })
  payMoney: number;

  @ApiProperty({ description: 'payMoneyNotVirtual' })
  payMoneyNotVirtual: number;

  @ApiProperty({ description: 'totalMinus' })
  totalMinus: number;

  @ApiProperty({ description: 'integralNum' })
  integralNum: number;

  @ApiProperty({ description: 'integralMinus' })
  integralMinus: number;

  @ApiProperty({ description: 'integralTotal' })
  integralTotal: number;

  @ApiProperty({ description: 'integralFlag' })
  integralFlag: boolean;

  @ApiProperty({ description: 'deliveryFee' })
  deliveryFee: number;

  @ApiProperty({ description: 'settlementWay' })
  settlementWay: number;

  @ApiProperty({ description: 'minusList' })
  minusList: MinusListVO[];

  @ApiProperty({ description: 'bookDiscountMinus' })
  bookDiscountMinus: boolean;

  @ApiProperty({ description: 'detailedListStr' })
  detailedListStr: string[];

  @ApiProperty({ description: 'rulesExplain' })
  rulesExplain: string;

  @ApiProperty({ description: 'orderScanCashId' })
  orderScanCashId: string;

  @ApiProperty({ description: 'orderScanCash' })
  orderScanCash: boolean;

  @ApiProperty({ description: 'orderScanCashMoney' })
  orderScanCashMoney: number;

  @ApiProperty({ description: 'oldFansReward' })
  oldFansReward: boolean;

  @ApiProperty({ description: 'userBinding' })
  userBinding: boolean;

  @ApiProperty({ description: 'cashBackRatio' })
  cashBackRatio: number;

  @ApiProperty({ description: 'prizeType' })
  prizeType: string;

  @ApiProperty({ description: 'description' })
  description: object;

  @ApiProperty({ description: 'winesiteServiceFeeMode' })
  winesiteServiceFeeMode: object;

  @ApiProperty({ description: 'winesiteServiceFee' })
  winesiteServiceFee: number;

  @ApiProperty({ description: 'feeRule' })
  feeRule: object;

  @ApiProperty({ description: 'popping' })
  popping: boolean;

  @ApiProperty({ description: 'shopInfoId' })
  shopInfoId: object;

  @ApiProperty({ description: 'shopInfoName' })
  shopInfoName: object;

  @ApiProperty({ description: 'ticket' })
  ticket: object;

  @ApiProperty({ description: 'seckillIntegralFlag' })
  seckillIntegralFlag: boolean;

  @ApiProperty({ description: 'seckillCouponFlag' })
  seckillCouponFlag: boolean;

  @ApiProperty({ description: 'memberDayFlag' })
  memberDayFlag: boolean;

  @ApiProperty({ description: 'shoppingIntegralThreshold' })
  shoppingIntegralThreshold: object;

  @ApiProperty({ description: 'otherGiftList' })
  otherGiftList: object[];

  @ApiProperty({ description: 'shopNotEnoughGoodsList' })
  shopNotEnoughGoodsList: object[];

  @ApiProperty({ description: 'notDisturbType' })
  notDisturbType: string;

  @ApiProperty({ description: 'transferType' })
  transferType: number;

  @ApiProperty({ description: 'guangxi' })
  guangxi: boolean;

  @ApiProperty({ description: 'openSvipZone' })
  openSvipZone: object;

  @ApiProperty({ description: 'openSvipRes' })
  openSvipRes: object;

  @ApiProperty({ description: 'orderTipsContent' })
  orderTipsContent: object;

  @ApiProperty({ description: 'balanceType' })
  balanceType: boolean;

  @ApiProperty({ description: 'totalBalance' })
  totalBalance: number;

  @ApiProperty({ description: 'useBalance' })
  useBalance: number;

  @ApiProperty({ description: 'balanceReason' })
  balanceReason: string;

  @ApiProperty({ description: 'balanceNotPassword' })
  balanceNotPassword: boolean;

  @ApiProperty({ description: 'balanceDisableGoodsList' })
  balanceDisableGoodsList: object[];

  @ApiProperty({ description: 'calcIntegral' })
  calcIntegral: boolean;

  @ApiProperty({ description: 'bigCouponId' })
  bigCouponId: object;

  @ApiProperty({ description: 'bigCouponName' })
  bigCouponName: object;

  @ApiProperty({ description: 'bigDiscountType' })
  bigDiscountType: object;

  @ApiProperty({ description: 'bigCouponMaxMinus' })
  bigCouponMaxMinus: number;

  @ApiProperty({ description: 'couponDetailId' })
  couponDetailId: string;

  @ApiProperty({ description: 'hidePhone' })
  hidePhone: boolean;
}
