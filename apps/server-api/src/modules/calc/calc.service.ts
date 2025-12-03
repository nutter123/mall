import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { BuyCalcDTO } from './vo/BuyCalc.dto';
import { CalcBuyVO } from './vo/CalcBuy.vo';
import { CalcGoodsDTO } from './vo/CalcGoods.dto';
import { BusinessException } from '../../common/exceptions/business.exception';
import { PayConfigVO } from './vo/PayConfig.vo';
import { GoodsListVO } from '../goods/vo/GoodsList.vo';
import { GoodsSplitListVO } from '../goods/vo/GoodsSplitList.vo';
import { CouponDetailVO } from '../coupon/vo/CouponDetail.vo';
import { MinusListVO } from './vo/MinusList.vo';
import { BookDetailGroupVO } from './vo/BookDetailGroup.vo';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from '../address/entities/address.entity';
import { Repository } from 'typeorm';
import { Site } from '../site/entities/site.entity';
import { ProductSku } from '../product/entities/product-sku.entity';
import { ProductSpu } from '../product/entities/product-spu.entity';

@Injectable()
export class CalcService {
  // 注入依赖：PrismaService 替代 Mapper；UserService
  constructor(
    @InjectRepository(Site)
    private siteRepo: Repository<Site>,
    @InjectRepository(ProductSku)
    private productSkuRepo: Repository<ProductSku>,
    @InjectRepository(ProductSpu)
    private productSpuRepo: Repository<ProductSpu>,
    private readonly userService: UserService, // 假设用于获取用户状态
  ) {}

  /**
   * 对应 Java 方法: buyCalc(BuyCalcDTO buyCalc)
   * 立即购买结算逻辑
   */
  async buyCalc(buyCalc: BuyCalcDTO): Promise<CalcBuyVO> {
    // 创建最终的VO对象
    const calcBuyVO = new CalcBuyVO();

    // 假设只处理 goodsRequests 中的第一个商品，并处理 null/empty
    const goodsRequest: CalcGoodsDTO = buyCalc.calcGoodsList?.[0];
    if (!goodsRequest) {
      throw new BusinessException('E4004', '商品列表不能为空');
    }

    // 由于 goodsId 是 Long，这里使用 string 保持一致性
    const goodsIdString: string = goodsRequest.goodsId;

    // 1. 查询站点信息 (Java: siteMapper.getSiteById)
    const siteEntity: Site | null = await this.siteRepo.findOne({
      where: { id: BigInt(buyCalc.siteId) }, // 假设 siteId 也是 BigInt
    });

    if (!siteEntity) {
      throw new BusinessException('E4005', '站点不存在');
    }

    // 2. 查询商品信息 (Java: productMapper.getSkuById & getSpuById)
    const skuEntity: ProductSku | null =
      await this.productSkuRepo.findOne({
        where: { id: BigInt(goodsIdString) },
      });

    if (!skuEntity) {
      throw new BusinessException('E4006', 'SKU商品不存在');
    }

    const spuEntity: ProductSpu | null =
      await this.productSpuRepo.findOne({
        where: { id: skuEntity.spuId }, // spuId 是 BigInt
      });

    if (!spuEntity) {
      throw new BusinessException('E4007', 'SPU商品信息缺失');
    }

    // --- 3. 数据聚合与动态计算 ---
    // 站点信息 (字段映射需使用驼峰命名)
    calcBuyVO.businessOpen = siteEntity.businessStartTime ?? '';
    calcBuyVO.deliveryTime = siteEntity.deliveryTimeMinutes ?? 0;
    calcBuyVO.svipSite = siteEntity.enableSvipSite ?? false;
    calcBuyVO.godSite = siteEntity.enableGodSite ?? false;
    calcBuyVO.reservation = siteEntity.enableReservation ?? false;
    calcBuyVO.reservationStartTime = siteEntity.reservationStartTime ?? '';
    calcBuyVO.openStatusNew = siteEntity.status ?? 0;
    calcBuyVO.invoiceType = siteEntity.invoiceType ?? '';
    calcBuyVO.invoiceSpecialType = siteEntity.invoiceType ?? '';
    calcBuyVO.provideSpecialTicke = siteEntity.provideSpecialTicket ?? false;

    // 用户信息（简化为硬编码）
    calcBuyVO.svipUser = false;
    calcBuyVO.godUser = false;
    calcBuyVO.newUser = true;
    calcBuyVO.godUserFast = false;

    // 支付配置
    const payConfigVo = new PayConfigVO();
    payConfigVo.wechatPay = true;
    payConfigVo.alipayPay = true;
    payConfigVo.balancePay = true;
    payConfigVo.cashOnDelivery = true;
    payConfigVo.cloudQuickPay = true;
    calcBuyVO.payConfigVo = payConfigVo;

    // 商品列表
    const goodsListVO = new GoodsListVO();
    goodsListVO.spuId = spuEntity.id.toString(); // BigInt to string
    goodsListVO.goodsId = skuEntity.id.toString(); // BigInt to string
    goodsListVO.goodsQuantity = goodsRequest.goodsQuantity;
    goodsListVO.saleName = spuEntity.saleName ?? '';
    goodsListVO.deDetails = spuEntity.saleName ?? '';
    goodsListVO.price = skuEntity.price ?? 0;
    goodsListVO.imgUrl = spuEntity.mainImageUrl ?? '';
    goodsListVO.backgroundColor = spuEntity.backgroundColor ?? '';
    goodsListVO.imgUrlNotGif = spuEntity.mainImageUrlNotGif ?? '';
    goodsListVO.saleSpecName = skuEntity.specName ?? '';
    goodsListVO.specNum = skuEntity.specNum ?? 0;
    goodsListVO.authentic = spuEntity.authentic ?? false;
    goodsListVO.speedDelivery = spuEntity.speedDelivery ?? false;
    goodsListVO.frozen = spuEntity.frozen ?? false;

    // 商品拆分列表
    const goodsSplitListVO = new GoodsSplitListVO();
    goodsSplitListVO.goodsQuantity = goodsRequest.goodsQuantity;
    goodsSplitListVO.priceType = 'original';
    goodsSplitListVO.nowPrice = skuEntity.price ?? 0;
    goodsSplitListVO.price = skuEntity.price ?? 0;
    goodsSplitListVO.integral = 0;
    goodsSplitListVO.priceSort = 6;

    // Java: Collections.singletonList(goodsSplitListVO)
    goodsListVO.goodsSplitList = [goodsSplitListVO];

    goodsListVO.gift = false;
    goodsListVO.useCoupon = false;
    goodsListVO.integral = 0;
    goodsListVO.memberDayFlag = false;
    goodsListVO.addBuy = false;
    goodsListVO.addSuperValue = false;
    goodsListVO.overtimePayment = spuEntity.overtimePayment ?? false;
    goodsListVO.cashOnDelivery = spuEntity.cashOnDelivery ?? false;

    // 动态计算字段
    goodsListVO.goodsQuantity = goodsRequest.goodsQuantity;
    goodsListVO.frozenQuantity = 4;
    goodsListVO.disable = false;
    goodsListVO.limitOut = false;
    goodsListVO.deDetails = goodsListVO.saleName;
    goodsListVO.specName = skuEntity.specName ?? '';
    goodsListVO.otherService = null;

    // Java: Collections.singletonList(goodsListVO)
    calcBuyVO.goodsList = [goodsListVO];

    // 优惠券、活动等（硬编码）
    // Java: Collections.singletonList(new CouponDetailVO(...))
    const couponDetailVO = new CouponDetailVO();
    couponDetailVO.id = '1359029786834878579';
    couponDetailVO.minus = 2900;
    couponDetailVO.banReason = null;
    couponDetailVO.openSvipNew = false;
    // 假设 CouponDetailVO 包含更多字段...

    calcBuyVO.couponDetailList = [couponDetailVO];

    // Java: Arrays.asList(...)
    calcBuyVO.minusList = [
      new MinusListVO({
        type: 'coupon',
        name: '优惠券',
        minus: 2900,
        svip: false,
      }),
      new MinusListVO({
        type: 'integral',
        name: '积分抵扣',
        minus: 0,
        svip: false,
      }),
    ];

    calcBuyVO.banCouponDetailList = []; // Empty list
    calcBuyVO.authentic = true;
    calcBuyVO.speedDelivery = true;
    calcBuyVO.overtimePayment = true;
    calcBuyVO.cashOnDelivery = true;
    calcBuyVO.frozen = true;

    // 核心财务计算
    const totalMoney = goodsListVO.price * goodsListVO.goodsQuantity;
    const totalMinus = 2900;
    const deliveryFee = 0;
    const payMoney = totalMoney - totalMinus + deliveryFee;

    calcBuyVO.totalQuantity = goodsRequest.goodsQuantity;
    calcBuyVO.totalMoney = totalMoney;
    calcBuyVO.promotionMoney = totalMoney;
    calcBuyVO.totalMinus = totalMinus;
    calcBuyVO.deliveryFee = deliveryFee;
    calcBuyVO.payMoney = payMoney;
    calcBuyVO.payMoneyNotVirtual = payMoney;
    calcBuyVO.integralFlag = true;
    calcBuyVO.popping = true;
    calcBuyVO.orderScanCash = true;
    calcBuyVO.orderScanCashMoney = payMoney;
    calcBuyVO.integralNum = 0;
    calcBuyVO.integralMinus = 0;
    calcBuyVO.integralTotal = 0;
    calcBuyVO.settlementWay = 2;

    // bookDetailGroupList
    // ⚠️ Java: LocalDateTime.now().plusDays(1).toLocalDate().toString() -> 使用 JS Date
    const nextDayDateString = new Date(Date.now() + 86400000)
      .toISOString()
      .split('T')[0];

    calcBuyVO.bookDetailGroupList = [
      new BookDetailGroupVO({
        bookDate: nextDayDateString,
        calcBookDetailList: [],
      }),
    ];

    // 补充其他字段 (省略 setter 赋值)
    calcBuyVO.superValueGoodsList = [];
    calcBuyVO.tableEssentialList = [];
    calcBuyVO.addBuyList = [];
    calcBuyVO.shopBase = null;
    calcBuyVO.business = true;
    calcBuyVO.peakTime = false;
    calcBuyVO.peakPeriodMoney = 100;
    calcBuyVO.unPeakPeriodMoney = 0;

    // Java: Arrays.asList(...)
    calcBuyVO.detailedListStr = [
      '获赔11元优惠券及1积分，0分钟≤超时时间<1分钟',
      '获赔244元优惠券及2积分，1分钟≤超时时间',
    ];

    calcBuyVO.rulesExplain = '<p>普通超时赔付说明1111</p>';

    // 补充其他字段 (省略 setter 赋值)
    // 使用 Object.assign 模拟快速设置大量字段
    Object.assign(calcBuyVO, {
      orderScanCashId: '1359030053122859115',
      orderScanCash: true,
      orderScanCashMoney: 30399,
      oldFansReward: false,
      userBinding: true,
      cashBackRatio: 100,
      prizeType: 'gift',
      description: null,
      winesiteServiceFeeMode: null,
      winesiteServiceFee: 0,
      feeRule: null,
      shopInfoId: null,
      shopInfoName: null,
      ticket: null,
      seckillIntegralFlag: true,
      seckillCouponFlag: true,
      memberDayFlag: false,
      shoppingIntegralThreshold: null,
      otherGiftList: [],
      shopNotEnoughGoodsList: [],
      notDisturbType: 'none',
      transferType: 0,
      guangxi: true,
      openSvipZone: null,
      openSvipRes: null,
      orderTipsContent: null,
      balanceType: true,
      totalBalance: 0,
      useBalance: 30399,
      balanceReason: '可抵扣余额不足',
      balanceNotPassword: true,
      balanceDisableGoodsList: [],
      calcIntegral: true,
      bigCouponId: null,
      bigCouponName: null,
      bigDiscountType: null,
      bigCouponMaxMinus: 0,
      couponDetailId: '1359029786834878579',
      hidePhone: false,
    });

    return calcBuyVO;
  }
}
