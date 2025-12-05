import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  DefaultValuePipe,
  ParseBoolPipe,
  ParseIntPipe
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiBody } from '@nestjs/swagger';

// 导入自定义的 Swagger 包装器和 Header 装饰器
import {MallHeadersWithoutSiteId} from "../../common/decorators/mall-headers.decorator";
import {ApiResWrapper} from "../../common/decorators/api-res-wrapper.decorator";
import {CommonHeaders } from "../../common/decorators/common-headers.decorator";
import type {CommonHeadersDto} from "../../common/decorators/common-headers.decorator";
import {MallHeaders} from "../../common/decorators/mall-headers.decorator";
import { StringToBigIntPipe } from '../../common/pipes/string-to-bigint.pipe';
import {GoodsService} from "./goods.service";
import {GoodDTO} from "./dto/Good.dto";
import {GoodDetailInfoVO} from "./vo/GoodDetailInfo.vo";
import {GoodBuyInfoVO} from "./vo/GoodBuyInfo.vo";
import {GoodBaseInfoVO} from "./vo/GoodBaseInfo.vo";

@ApiTags('商品管理') // 对应 @Tag(name = "商品管理")
@Controller('goods') // 对应 @RequestMapping("/v2-app-mall/goods") 的 'goods' 部分
export class GoodsController {

  // @Resource private GoodService goodService; -> 构造函数注入
  constructor(private readonly goodService: GoodsService) {}

  // --- POST /add ---

  /**
   * 1. 新增商品
   */
  @Post('add')
  @ApiOperation({ summary: '1. 新增商品' })
  @ApiBody({ type: GoodDTO, description: '商品创建 DTO' })
  @ApiResWrapper(String) // 返回 CommonRes<Long> 对应 CommonRes<String>
  async add(
    // Java: @Valid @RequestBody GoodDTO goodDTO -> NestJS: @Body() goodDTO: GoodDTO
    @Body() goodDTO: GoodDTO
  ): Promise<string> {
    // Java 代码: goodService.add(goodDTO) 返回 Long
    // NestJS Service 返回 BigInt 或 String，这里假设 Service 返回 String ID
    return this.goodService.add(goodDTO);
  }

  // --- GET /getDetail ---

  /**
   * 1. 获取商品详情
   */
  @Get('getDetail')
  @ApiOperation({ summary: '1. 获取商品详情' })
  @MallHeadersWithoutSiteId()

  // Query 参数文档化： Long ID 转换为 String
  @ApiQuery({ name: 'id', description: '商品id', required: true, type: String })
  @ApiQuery({ name: 'siteId', description: '站点id', required: true, type: Number })

  @ApiResWrapper(GoodDetailInfoVO) // 自动包装 CommonRes<GoodDetailInfoVO>
  async getDetail(
    // Long id -> String: 使用自定义 Pipe 确保类型转换
    @Query('id', StringToBigIntPipe) id: string,
    // Integer siteId -> number: 使用 ParseIntPipe
    @Query('siteId', ParseIntPipe) siteId: number,
    @CommonHeaders() headers: CommonHeadersDto,
  ): Promise<GoodDetailInfoVO | null> {
    // Java 代码: goodService.getProductDetail(id);
    return this.goodService.getProductDetail(id);
  }

  // --- GET /getBuyNotCombo ---

  /**
   * 2. 获取商品购买信息
   */
  @Get('getBuyNotCombo')
  @ApiOperation({ summary: '2. 获取商品购买信息' })
  @MallHeadersWithoutSiteId()

  // Query 参数文档化
  @ApiQuery({ name: 'id', description: '商品id', required: true, type: String })
  @ApiQuery({ name: 'vipDayGoods', description: '是否显示单规格', required: false, type: Boolean, example: false })

  @ApiResWrapper(GoodBuyInfoVO) // 自动包装 CommonRes<GoodBuyInfoVO>
  async getBuyNotCombo(
    // Long id -> String
    @Query('id', StringToBigIntPipe) id: string,
    // Boolean vipDayGoods -> 使用 DefaultValuePipe 和 ParseBoolPipe
    @Query('vipDayGoods', new DefaultValuePipe(false), ParseBoolPipe) vipDayGoods: boolean,
    @CommonHeaders() headers: CommonHeadersDto,
  ): Promise<GoodBuyInfoVO | null> {
    // Java 代码: goodService.getBuyNotCombo(id, vipDayGoods);
    return this.goodService.getBuyNotCombo(id, vipDayGoods);
  }

  // --- GET /getCombo ---

  /**
   * 14. 获取套餐列表
   */
  @Get('getCombo')
  @ApiOperation({ summary: '14. 获取套餐列表' })
  @MallHeadersWithoutSiteId()
  @ApiQuery({ name: 'id', description: '商品id', required: true, type: String })

  @ApiResWrapper(GoodBaseInfoVO) // 自动包装 CommonRes<GoodBaseInfoVO>
  getCombo(
    // Long id -> String
    @Query('id', StringToBigIntPipe) id: string,
    @CommonHeaders() headers: CommonHeadersDto,
  ): GoodBaseInfoVO {
    // Java 代码: return CommonRes.success(null);
    return new GoodBaseInfoVO(); // 返回 null，拦截器会自动包装 CommonRes.success(null)
  }
}