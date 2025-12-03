import {
  Controller,
  Get,
  Query,
  ParseIntPipe,
  UsePipes, // 仅在需要局部管道时使用
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { Type } from 'class-transformer';

// 导入 Service 和 VO/DTO
import { HomeService } from './home.service';

// 导入自定义的 Swagger 包装器和 Header 装饰器
import { ApiCommonHeadersWithoutSiteId } from '../../common/decorators/api-common-headers-without-site-id.decorator';
import { ApiResWrapper } from '../../common/decorators/api-res-wrapper.decorator';
import { CommonHeaders } from '../../common/decorators/common-headers.decorator';
import type { CommonHeadersDto } from '../../common/decorators/common-headers.decorator';
import { ApiCommonHeaders } from '../../common/decorators/api-common-headers.decorator';
import { HomeAllConfigVO } from './vo/HomeAllConfig.vo';
import { AllResVO } from './vo/AllRes.vo';
import { GetPersonalityGridResVO } from './vo/GetPersonalityGridRes.vo';
import { SeckillDiscountZoneResVO } from './vo/SeckillDiscountZoneRes.vo';
import { NewWelfareVO } from '../coupon/vo/NewWelfare.vo';
import { RecommendZoneGoodsAndComboResVO } from './vo/RecommendZoneGoodsAndComboRes.vo';
import { RecommendZoneGoodsAndComboReqVO } from './vo/RecommendZoneGoodsAndComboReq.vo';
import { CommonPage } from '../../common/dto/common-page.dto';
import { BackgroundVO } from './vo/Background.vo';

@ApiTags('首页管理') // 对应 @Tag(name = "首页管理")
@Controller('home') // 对应 @RequestMapping("/v2-app-mall/home") 的 'home' 部分
export class HomeController {
  // @Resource private HomeService homeService; -> 构造函数注入
  constructor(private readonly homeService: HomeService) {}

  /**
   * 14. 获取首页所需配置
   */
  @Get('allConfig')
  @ApiOperation({ summary: '14. 获取首页所需配置' })
  @ApiCommonHeaders()
  @ApiResWrapper(HomeAllConfigVO)
  async allConfig(
    @CommonHeaders() headers: CommonHeadersDto,
  ): Promise<HomeAllConfigVO | null> {
    const siteId = headers.siteId;
    if (!siteId) {
      return null;
    }
    return this.homeService.getAllConfig(siteId);
  }

  /**
   * 13. 获取首页所需信息
   */
  @Get('all')
  @ApiOperation({ summary: '13. 获取首页所需信息' })
  @ApiCommonHeaders()
  @ApiQuery({ name: 'siteId', description: '站点ID', type: Number })
  @ApiResWrapper(AllResVO)
  async all(
    @Query('siteId', ParseIntPipe) siteId: number,
    @CommonHeaders() headers: CommonHeadersDto,
  ): Promise<AllResVO> {
    return this.homeService.all(siteId);
  }

  /**
   * 13. 个性化方格
   */
  @Get('getPersonalityGrid')
  @ApiOperation({ summary: '13. 个性化方格' })
  @ApiCommonHeaders()
  @ApiQuery({ name: 'siteId', description: '站点ID', type: Number })
  @ApiResWrapper(GetPersonalityGridResVO)
  getPersonalityGrid(
    @Query('siteId', ParseIntPipe) siteId: number,
    @CommonHeaders() headers: CommonHeadersDto,
  ): GetPersonalityGridResVO {
    const getPersonalityGridResVO = new GetPersonalityGridResVO();
    return getPersonalityGridResVO;
  }

  /**
   * 8. 获取秒杀限时折扣专区
   */
  @Get('seckillDiscountZone')
  @ApiOperation({ summary: '8. 获取秒杀限时折扣专区' })
  @ApiCommonHeaders()
  @ApiQuery({ name: 'siteId', description: '站点ID', type: Number })
  @ApiResWrapper(SeckillDiscountZoneResVO)
  getSeckillDiscountZone(
    @Query('siteId', ParseIntPipe) siteId: number,
    @CommonHeaders() headers: CommonHeadersDto,
  ): SeckillDiscountZoneResVO {
    const seckillDiscountZoneResVO = new SeckillDiscountZoneResVO();
    // 对应 Java: seckillDiscountZoneResVO.setGoodsList(new ArrayList<>());
    seckillDiscountZoneResVO.goodsList = [];
    return seckillDiscountZoneResVO;
  }

  /**
   * 2. 获取新人福利(包含新人专区)
   */
  @Get('newWelfare')
  @ApiOperation({ summary: '2. 获取新人福利(包含新人专区)' })
  @ApiCommonHeaders()
  @ApiQuery({ name: 'siteId', description: '站点ID', type: Number })
  @ApiResWrapper(NewWelfareVO)
  newWelfare(
    @Query('siteId', ParseIntPipe) siteId: number,
    @CommonHeaders() headers: CommonHeadersDto,
  ): NewWelfareVO {
    const newWelfare = new NewWelfareVO();
    return newWelfare;
  }

  /**
   * 10.2. 获取推荐专区商品（包含套餐）
   */
  @Get('recommendZoneGoodsAndCombo')
  @ApiOperation({ summary: '10.2. 获取推荐专区商品（包含套餐）' })
  @ApiCommonHeaders()

  // ⚠️ Swagger 文档化 CommonPage<T> 需要特殊处理
  // 假设 CommonPage DTO 已使用 @ApiProperty 定义了 pageNum, pageSize, list, total 等字段
  @ApiResWrapper(RecommendZoneGoodsAndComboResVO) // 包装 CommonPage 内部的列表元素类型
  async recommendZoneGoodsAndCombo(
    // Java: @Valid @RequestParam RecommendZoneGoodsAndComboReqVO reqVO
    // NestJS: @Query() 接收整个 DTO 对象，全局 ValidationPipe 处理 @Valid
    @Query() recommendZoneGoodsAndComboReqVO: RecommendZoneGoodsAndComboReqVO,
    @CommonHeaders() headers: CommonHeadersDto,
  ): Promise<CommonPage<RecommendZoneGoodsAndComboResVO>> {
    return this.homeService.recommendZoneGoodsAndCombo(
      recommendZoneGoodsAndComboReqVO,
    );
  }

  /**
   * 1. 获取背景图
   */
  @Get('background')
  @ApiOperation({ summary: '1. 获取背景图' })
  @ApiCommonHeaders()
  @ApiQuery({ name: 'siteId', description: '站点ID', type: Number })
  @ApiResWrapper(BackgroundVO)
  background(
    @Query('siteId', ParseIntPipe) siteId: number,
    @CommonHeaders() headers: CommonHeadersDto,
  ): BackgroundVO {
    return new BackgroundVO(); // Java 代码: return CommonRes.success(null);
  }

  /**
   * 17. 新人功能区启用
   */
  @Get('newPageEnable')
  @ApiOperation({ summary: '17. 新人功能区启用' })
  @ApiResWrapper(String) // 假设 Long ID 被转换为 String
  newPageEnable(): string {
    return ''; // Java 代码: return CommonRes.success(null);
  }
}