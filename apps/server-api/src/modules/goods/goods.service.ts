import { Injectable } from '@nestjs/common';
import { GoodDTO } from './dto/Good.dto';
import { GoodsConverter } from './goods.converter';
import { EstimateService } from '../estimate/estimate.service';
import { GoodDetailInfoVO } from './vo/GoodDetailInfo.vo';
import { GoodSpecVO } from './vo/GoodSpec.vo';
import { GoodAttrVO } from './vo/GoodAttr.vo';
import { EstimateVO } from './vo/Estimate.vo';
import { BigCouponVO } from './vo/BigCoupon.vo';
import {GoodBuyInfoVO} from "./vo/GoodBuyInfo.vo";
import { InjectRepository } from '@nestjs/typeorm';
import { Good } from '../product/entities/good.entity';
import { Repository } from 'typeorm';
import { ProductImage } from '../product/entities/product-image.entity';
import { ProductSku } from '../product/entities/product-sku.entity';
import { ProductAttribute } from '../product/entities/product-attribute.entity';

@Injectable()
export class GoodsService {
  // 注入依赖
  constructor(
    @InjectRepository(ProductSku)
    private readonly productSkuRepo: Repository<ProductSku>,
    @InjectRepository(ProductImage)
    private readonly imageRepo: Repository<ProductImage>,
    @InjectRepository(ProductAttribute)
    private readonly attributeRepo: Repository<ProductAttribute>,
    private readonly goodConverter: GoodsConverter,
    private readonly estimateService: EstimateService,
  ) {}

  /**
   * 对应 Java 方法: add(GoodDTO goodDTO)
   * 新增商品
   */
  async add(goodDTO: GoodDTO): Promise<string> {
    // 1. 新增商品
    // Java: BeanUtil.copyProperties(goodDTO, goodDO); goodMapper.insert(goodDO);

    // ⚠️ 在 NestJS 中，我们避免直接操作 DO。而是通过 Prisma Client 创建。
    // 使用 Object.assign 模拟 BeanUtil 复制属性，然后手动处理 BigInt/String 转换

    const newGoodData = Object.assign({}, goodDTO, {
      // 假设 goodDTO 中有 Long 类型的 ID 字段，这里统一转换为 BigInt
      // 如果 ID 是自增的，则不需要提供 ID 字段
    });

    const productSkuDO: ProductSku = await this.productSkuRepo.save({
      ...newGoodData,
      // ⚠️ 注意：这里需要确保 goodDTO 的字段与 ProductSku 字段名完全匹配
    });

    // 返回 Long ID 的 String 形式
    return productSkuDO.id.toString();
  }

  /**
   * 对应 Java 方法: getProductDetail(Long skuId)
   * 获取商品详情
   */
  async getProductDetail(
    skuIdString: string,
  ): Promise<GoodDetailInfoVO | null> {
    const skuIdBigInt = BigInt(skuIdString);

    // 1. 查询商品信息 (Java: productMapper.getProductDetail)
    // ⚠️ 由于这是一个复杂查询，我们假设 productMapper.getProductDetail 是一个视图或复杂联接查询，
    // 在 Prisma 中需要手动实现 Select/Include 或 $queryRaw。
    // 这里简化为：先查 SKU，再查 SPU

    const sku = await this.productSkuRepo.findOne({
      where: { id: skuIdString },
    });
    if (!sku || !sku.spuId) return null;

    // 假设 GoodDetailInfoVO 可以由 SPU/SKU 信息初始化
    // ⚠️ 注意：这里需要一个更复杂的查询来获取所有信息，但我们使用手动赋值模拟聚合。
    const goodDetailInfoVO = new GoodDetailInfoVO();

    // 查询 SPU (GoodDetailInfoVO 的核心信息来自 SPU)
    const spu = await this.productSkuRepo.findOne({
      where: { id: String(sku.spuId) },
    });
    if (!spu) return null;

    // 假设 goodConverter.toDetailVO(sku, spu) 可以转换基础信息
    // goodDetailInfoVO = this.goodConverter.toDetailVO(sku, spu);

    // --- 业务逻辑赋值 ---

    // 2. 查询商品图片 (Java: productImageMapper.getImageListBySpuId)
    const images: ProductImage[] = await this.imageRepo.find(
      {
        where: { skuId: skuIdString },
      },
    );
    // 假设 goodConverter.toImgUrlList(images) 可以转换图片列表
    // goodDetailInfoVO.imgUrlList = this.goodConverter.toImgUrlList(images);

    // 3. 用户VIP状态 (硬编码/TODO)
    goodDetailInfoVO.userVip = false;
    goodDetailInfoVO.userVipPrice = false;
    goodDetailInfoVO.svipPrice = false;
    goodDetailInfoVO.userGodPrice = false;
    goodDetailInfoVO.godPrice = false;

    // 4. 获取商品SKU列表
    const goodSpecVOS: GoodSpecVO[] = await this.getGoodSpecList(
      sku.spuId.toString(),
      skuIdString,
    );
    goodDetailInfoVO.specList = goodSpecVOS;

    // 5. 查询商品描述属性列表 (Java: productMapper.getAttrListBySpuId)
    const attributes: ProductAttribute[] =
      await this.attributeRepo.find({
        where: { spuId: sku.spuId },
      });
    const attributesVO: GoodAttrVO[] =
      this.goodConverter.toAttrListVO(attributes);
    goodDetailInfoVO.attrList = attributesVO;

    // 6. 促销,运营数据获取 (硬编码)
    goodDetailInfoVO.singlePromotionList = []; // Collections.emptyList()
    goodDetailInfoVO.singlePromotionGoingList = [];
    goodDetailInfoVO.multiplePromotionList = [];
    goodDetailInfoVO.pricePromotionList = [];
    goodDetailInfoVO.saleAttrList = [];
    goodDetailInfoVO.collect = false;
    goodDetailInfoVO.goodsToolList = [];
    goodDetailInfoVO.goodsCashBack = false;
    goodDetailInfoVO.allowBuy = true;
    goodDetailInfoVO.onlyEatIn = false;
    goodDetailInfoVO.ticket = null;
    goodDetailInfoVO.subscribeCount = null;
    goodDetailInfoVO.subscribe = false;
    goodDetailInfoVO.subscribeId = '';
    goodDetailInfoVO.standby = false;
    goodDetailInfoVO.now = new Date()
      .toISOString()
      .replace('T', ' ')
      .substring(0, 19);
    goodDetailInfoVO.seckillId = null;
    goodDetailInfoVO.seckillPrice = null;
    goodDetailInfoVO.entryStyle = 'default';
    goodDetailInfoVO.sharingImg =
      'https://outside-test-a-static.v2.jiuxiao2.cn/outside/fms/img/2413b8c46e4b48ea8173097e2d719efe.png';
    goodDetailInfoVO.invitePrizeBinding = true;
    goodDetailInfoVO.yearGiftId = null;
    goodDetailInfoVO.svipGiftCouponId = null;
    goodDetailInfoVO.invalid = 0;
    goodDetailInfoVO.taskId = null;
    goodDetailInfoVO.taskRewardId = null;
    goodDetailInfoVO.idIng = null;

    // 7. 获取预估价信息
    const estimateVO: EstimateVO =
      await this.estimateService.estimate(skuIdString);
    goodDetailInfoVO.estimate = estimateVO;
    goodDetailInfoVO.estimatePrice = estimateVO.price - estimateVO.couponMinus;
    goodDetailInfoVO.estimateType = estimateVO.estimateType;
    goodDetailInfoVO.couponFlag = estimateVO.couponFlag;
    goodDetailInfoVO.estimateVipPrice = null;
    goodDetailInfoVO.estimateNorPrice = null;
    goodDetailInfoVO.minSpecPrice = null;
    goodDetailInfoVO.minUnitName = estimateVO.minUnitName;
    goodDetailInfoVO.original = true;
    goodDetailInfoVO.estimateVip = null;

    // 8. 大额劵 (使用对象字面量模拟 Builder)
    const bigCouponVO: BigCouponVO = {
      id: '1284070091981701549',
      discountType: 'minus',
      discountMinus: 200000,
      money: 0,
      svipPrice: 0,
    } as BigCouponVO;
    goodDetailInfoVO.bigCoupon = bigCouponVO;

    // 9. 运营信息
    goodDetailInfoVO.discernId = null;
    goodDetailInfoVO.popularizeGoods = null;
    goodDetailInfoVO.rankingName = '啤酒回购榜';
    goodDetailInfoVO.rankingType = 2;
    goodDetailInfoVO.rankingNum = 1;

    // 10. 商品补充信息
    goodDetailInfoVO.goods1LvlCatId = '1426449173301563393';
    goodDetailInfoVO.goods2LvlCatId = null;
    goodDetailInfoVO.goods1LvlCatName = '啤酒';
    goodDetailInfoVO.goods2LvlCatName = '';

    return goodDetailInfoVO;
  }

  /**
   * 获取商品规格列表
   */
  private async getGoodSpecList(
    spuIdString: string,
    skuIdString: string,
  ): Promise<GoodSpecVO[]> {
    const spuIdBigInt = BigInt(spuIdString);
    const skuIdBigInt = BigInt(skuIdString);

    // Java: productMapper.getSpecListBySpuId(spuId)
    // 假设这是一个复杂查询，返回 GoodSpecDO 列表
    // ⚠️ 在 Prisma 中需要手动联接 SpecKey/SpecValue 表或使用 View
    // 这里模拟查询结果:
    const goodSpecDOS: any[] = [];
    // 假设 goodConverter.toGoodSpecVOList 可以转换
    const goodSpecVOS: GoodSpecVO[] =
      this.goodConverter.toGoodSpecVOList(goodSpecDOS);

    for (const specVO of goodSpecVOS) {
      // ⚠️ 比较 BigInt (或 String)
      if (specVO.id === skuIdString) {
        specVO.check = true;
      }
      specVO.min = false;

      // 获取商品预估价
      const estimateVO: EstimateVO =
        await this.estimateService.estimate(skuIdString);
      specVO.estimate = estimateVO;
    }
    return goodSpecVOS;
  }

  /**
   * 获取商品购买信息
   */
  async getBuyNotCombo(
    skuIdString: string,
    vipDayGoods: boolean,
  ): Promise<GoodBuyInfoVO | null> {
    const skuIdBigInt = BigInt(skuIdString);

    // 查询商品信息 (Java: productMapper.getProductBuyInfo)
    // 假设 GoodBuyInfoVO 可以由 SKU/SPU 信息初始化
    const goodBuyInfoVO = new GoodBuyInfoVO();

    // 查 SKU/SPU 逻辑同上，这里省略实际查询，只赋值
    // if (goodBuyInfoVO === null) return null;

    // TODO: 查询其他服务列表
    goodBuyInfoVO.otherServiceList = [];

    // TODO: 查询商品规格列表
    const goodSpecVOS: GoodSpecVO[] = await this.getGoodSpecList(
      skuIdString,
      skuIdString,
    ); // ⚠️ 简化，SPU ID 不应直接等于 SKU ID
    goodBuyInfoVO.specList = goodSpecVOS;

    // 促销,运营数据获取 (硬编码)
    goodBuyInfoVO.singlePromotionList = [];
    goodBuyInfoVO.singlePromotionGoingList = [];
    goodBuyInfoVO.multiplePromotionList = [];
    goodBuyInfoVO.pricePromotionList = [];
    goodBuyInfoVO.saleAttrList = [];
    goodBuyInfoVO.ticket = null;
    goodBuyInfoVO.subscribeCount = null;
    goodBuyInfoVO.subscribe = false;
    goodBuyInfoVO.subscribeId = null;
    goodBuyInfoVO.standby = false;
    goodBuyInfoVO.seckillId = null;
    goodBuyInfoVO.seckillPrice = null;
    goodBuyInfoVO.comboList = null;
    goodBuyInfoVO.entryStyle = 'default';
    goodBuyInfoVO.invalid = 0;

    // 获取预估价信息
    const estimateVO: EstimateVO =
      await this.estimateService.estimate(skuIdString);
    goodBuyInfoVO.estimate = estimateVO;
    const estimatePrice: number = estimateVO.price - estimateVO.couponMinus;
    goodBuyInfoVO.estimatePrice = estimatePrice;
    goodBuyInfoVO.estimateType = estimateVO.estimateType;
    goodBuyInfoVO.couponFlag = estimateVO.couponFlag;
    goodBuyInfoVO.estimateVipPrice = null;
    goodBuyInfoVO.estimateNorPrice = null;
    goodBuyInfoVO.minSpecPrice = null;
    goodBuyInfoVO.minUnitName = estimateVO.minUnitName;
    goodBuyInfoVO.original = true;
    goodBuyInfoVO.estimateVip = null;

    goodBuyInfoVO.popularizeGoods = null;
    goodBuyInfoVO.rulesExplain = '<p>普通超时赔付说明1111</p>';

    return goodBuyInfoVO;
  }
}
