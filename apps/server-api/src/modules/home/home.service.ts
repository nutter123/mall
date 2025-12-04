import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

// 导入 VO/DTO
import { CommonPage } from '../../common/dto/common-page.dto';
import { BusinessException } from '../../common/exceptions/business.exception';
import { SiteConverter } from '../site/site.converter';
import { AdvertisingService } from '../advertising/advertising.service';
import { NavigationService } from '../navigation/navigation.service';
import { NavigationConverter } from '../navigation/navigation.converter';
import { HomeAllConfigVO } from './vo/HomeAllConfig.vo';
import { SiteDetailsVO } from './vo/SiteDetails.vo';
import { SiteWecomEntranceVO } from './vo/SiteWecomEntrance.vo';
import { AllResVO } from './vo/AllRes.vo';
import { PayConfigVO } from '../calc/vo/PayConfig.vo';
import { RecommendZoneGoodsAndComboReqVO } from './vo/RecommendZoneGoodsAndComboReq.vo';
import { RecommendZoneGoodsAndComboResVO } from './vo/RecommendZoneGoodsAndComboRes.vo';
import { RecommendZoneVO } from './vo/RecommendZone.vo';
import { ShareVO } from './vo/Share.vo';
import { NoticeNewVO } from './vo/NoticeNew.vo';
import { SiteWecomEntranceConverter } from '../site/siteWecomEntrance.converter';
import { PicAdvertisingService } from '../advertising/picAdvertising.service';
import { RecommendZoneConverter } from '../recommend/recommendZone.converter';
import { BackgroundVO } from './vo/Background.vo';
import { Site } from '../site/entities/site.entity';
import { SiteWecomEntrance } from '../site/entities/site-wecom-entrance.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Navigation } from '../navigation/entities/navigation.entity';
import { RecommendZone } from '../recommend/entities/recommend-zone.entity';

@Injectable()
export class HomeService {
  // 假设您在 Controller 中使用了 @CommonHeaders() 获取了 siteId，并传递给 Service
  // 如果必须在 Service 中获取，需要注入 @Inject(REQUEST)
  constructor(
    @InjectRepository(Site)
    private readonly siteRepo: Repository<Site>, // 替代所有 Mapper
    @InjectRepository(SiteWecomEntrance)
    private readonly siteWecomEntranceRepo: Repository<SiteWecomEntrance>, // 替代所有 Mapper
    @InjectRepository(RecommendZone)
    private readonly recommendZoneRepo: Repository<RecommendZone>, // 替代所有 Mapper

    private readonly siteConverter: SiteConverter,
    private readonly weComEntranceConverter: SiteWecomEntranceConverter,
    private readonly navigationService: NavigationService,
    private readonly navigationConverter: NavigationConverter,
    private readonly advertisingService: AdvertisingService,
    private readonly picAdvertisingService: PicAdvertisingService,
    private readonly recommendZoneConverter: RecommendZoneConverter,
    @Inject(REQUEST) private readonly request: any, // 替代 RequestContext
  ) {}

  /**
   * 14. 获取首页所需配置
   * ⚠️ 注意：Java 的 requestContext.getSiteId() 在 NestJS 中需要从 Header 或其他上下文获取
   * 我们假设 CommonController 在调用此方法时已经处理了 siteId 的提取
   */
  async getAllConfig(siteId: string): Promise<HomeAllConfigVO> {
    const homeAllConfigVO = new HomeAllConfigVO();
    const siteIdBigInt = BigInt(siteId);

    // 1. 获取站点详情 (Java: siteMapper.selectById)
    const siteDO: Site | null = await this.siteRepo.findOne({
      where: { id: siteId },
    });

    if (!siteDO) {
      throw new BusinessException('E4008', '站点配置信息缺失');
    }

    const siteDetails: SiteDetailsVO = this.siteConverter.toVO(siteDO);

    // 2. 获取企微入口支持表 (Java: siteWecomEntranceMapper.selectOne)
    const weComEntranceDO: SiteWecomEntrance | null = await this.siteWecomEntranceRepo.findOne({
      where: { siteId: siteId }, // SiteId 是 unique
    });
    if (!weComEntranceDO) {
      throw new BusinessException('E4009', '企微入口配置信息缺失');
    }
    const weComEntrance: SiteWecomEntranceVO = this.weComEntranceConverter.toVO(weComEntranceDO);
    homeAllConfigVO.weComEntrance = weComEntrance;

    // --- 动态数据填充 ---
    // ⚠️ 模拟 setter 赋值，需要确保 DTO/VO 属性是 Public 的
    siteDetails.openStatus = siteDetails.openStatusNew === 1; // 根据数据库status字段判断
    siteDetails.isBusiness = siteDetails.openStatusNew === 1;
    siteDetails.notice = ['321']; // Collections.singletonList("321")
    siteDetails.shopNum = 0;
    siteDetails.city = '';
    siteDetails.firstPinYin = '';
    siteDetails.pinYin = '';
    siteDetails.isTransfer = false;
    siteDetails.areas = null;
    siteDetails.shopId = null;
    siteDetails.noticeNew = [];
    siteDetails.mourningThemeOpen = false;
    siteDetails.siteInviteTask = true;
    siteDetails.retail = true;
    siteDetails.godSite = true;
    siteDetails.fastSite = true;

    homeAllConfigVO.siteDetails = siteDetails;
    homeAllConfigVO.svipSite = siteDetails.siteSvip;

    return homeAllConfigVO;
  }

  /**
   * 13. 获取首页所需信息
   */
  async all(siteId: number): Promise<AllResVO> {
    const allResVO = new AllResVO();
    const siteIdBigInt = BigInt(siteId);

    // 头部广告
    allResVO.advertisingTop = await this.advertisingService.getTopList();
    // banner广告
    allResVO.advertisingBanner = await this.advertisingService.getBannerList();
    // 悬浮广告
    allResVO.advertisingSuspended = await this.advertisingService.getSuspendedList();
    // 背景图
    allResVO.background = new BackgroundVO();

    // --- 导航类目 ---

    // 底部导航
    let navigationDOs = await this.navigationService.getListByType('bottom');
    allResVO.bottomNavigation = this.navigationConverter.toBottomNavigationVOList(navigationDOs);

    // 类目导航
    navigationDOs = await this.navigationService.getListByType('category');
    allResVO.categoryNavigation = this.navigationConverter.toCategoryNavigationVOList(navigationDOs);

    // 图文导航
    navigationDOs = await this.navigationService.getListByType('graphic');
    allResVO.graphicNavigation = this.navigationConverter.toNavigationVOList(navigationDOs);

    // 获取服务标准
    navigationDOs = await this.navigationService.getListByType('service');
    allResVO.serviceStandards = this.navigationConverter.toNavigationVOList(navigationDOs);

    // 搜索框热词
    navigationDOs = await this.navigationService.getListByType('hot_word_search');
    allResVO.hotWordSearch = this.navigationConverter.toHotNavigationVOList(navigationDOs);

    // 搜索框底部热词
    navigationDOs = await this.navigationService.getListByType('hot_word_bottom');
    allResVO.hotWordBottom = this.navigationConverter.toHotNavigationVOList(navigationDOs);

    // 图片广告
    allResVO.picture = await this.picAdvertisingService.getOneAdsWithAreas();

    // 推荐专区
    allResVO.recommendZone = await this.getAllRecommendZones();

    // 其他
    allResVO.svipSite = true;

    // 站点信息
    const siteDO: Site | null = await this.siteRepo.findOne({
      where: { id: String(siteId) },
    });
    if (!siteDO) {
      throw new BusinessException('E4008', '站点配置信息缺失');
    }
    allResVO.siteDetails = this.siteConverter.toVO(siteDO);

    // 分享
    const shareVO = new ShareVO();
    shareVO.sharePicture =
      'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/8c45382cb6034d7393001dddf80563d2.png';
    shareVO.shareTitle = '通用分享标题';
    allResVO.share = shareVO;

    // 酒神周期
    allResVO.mourningThemeOpen = false;

    // 支付设置 (模拟 Builder)
    const payConfigVO: PayConfigVO = {
      alipayPay: true,
      balancePay: true,
      cashOnDelivery: true,
      cloudQuickPay: true,
      wechatPay: true,
    } as PayConfigVO;
    allResVO.payConfig = payConfigVO;

    // 酒神周期
    allResVO.godStart = '2025-08-09';
    allResVO.godEnd = '2025-08-09';

    return allResVO;
  }

  /**
   * 10.2. 获取推荐专区商品（包含套餐）
   */
  async recommendZoneGoodsAndCombo(
    recommendZoneGoodsAndComboReqVO: RecommendZoneGoodsAndComboReqVO,
  ): Promise<CommonPage<RecommendZoneGoodsAndComboResVO>> {
    // Java: QueryWrapper<WeComEntranceEntity> queryWrapper = new QueryWrapper<>();
    // Java: queryWrapper.eq("site_id", recommendZoneGoodsAndComboReqVO.getId());

    // ⚠️ 实际逻辑需要根据推荐专区请求参数执行复杂的查询
    // 这里仅模拟返回 CommonPage 结构

    const records: RecommendZoneGoodsAndComboResVO[] = []; // 假设查询结果

    // 模拟分页信息
    const iPage = {
      total: 1,
      size: 10,
      current: 1,
      pages: 1,
    };

    // 使用 CommonPage.restPage 静态方法创建分页结果
    const commonPage = CommonPage.restPage(iPage, records);

    return commonPage;
  }

  /**
   * 获取所有推荐专区
   */
  async getAllRecommendZones(): Promise<RecommendZoneVO[]> {
    // Java: recommendZoneMapper.selectList(new QueryWrapper<RecommendZoneEntity>());
    const recommendZoneDOs: RecommendZone[] = await this.recommendZoneRepo.find({});

    return this.recommendZoneConverter.doToVoList(recommendZoneDOs);
  }
}
