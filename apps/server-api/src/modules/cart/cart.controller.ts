import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ApiCommonHeadersWithoutSiteId } from '../../common/decorators/api-common-headers-without-site-id.decorator';
import { ApiResWrapper } from '../../common/decorators/api-res-wrapper.decorator';
import { CommonHeaders } from '../../common/decorators/common-headers.decorator';
import type { CommonHeadersDto } from '../../common/decorators/common-headers.decorator';
import { ApiCommonHeaders } from '../../common/decorators/api-common-headers.decorator';
import { Cart } from './entities/cart.entity';
@ApiTags('购物车接口') // 对应 @Tag(name = "购物车接口")
@Controller('cart') // 对应 @RequestMapping("/v2-app-mall/cart") 的 'cart' 部分
export class CartController {
  // 由于没有注入 Service，不需要 constructor

  /**
   * 1. 获取购物车商品ID
   */
  @Get('getCartGoodsId')
  @ApiOperation({ summary: '1. 获取购物车商品id' })
  @ApiCommonHeaders() // 对应 @CommonHeaders
  // 自动包装 CommonRes<List<Cart>>
  @ApiResWrapper(Cart)
  getCartGoodsId(@CommonHeaders() headers: CommonHeadersDto): Cart[] {
    // Java 代码: List<Cart> list = new ArrayList<>();
    return [];
  }

  /**
   * 1. 获取购物车总数
   */
  @Get('getCartCount')
  @ApiOperation({ summary: '1. 获取购物车总数' })
  @ApiCommonHeaders()
  // 自动包装 CommonRes<Integer> 对应 CommonRes<Number>
  @ApiResWrapper(Number)
  getCartCount(@CommonHeaders() headers: CommonHeadersDto): number {
    // Java 代码: return CommonRes.success(0);
    return 0;
  }

  /**
   * 2. 获取购物车信息
   */
  @Get('getCartInfo')
  @ApiOperation({ summary: '2. 获取购物车信息' })
  @ApiCommonHeadersWithoutSiteId()
  @ApiQuery({
    name: 'siteId',
    description: '站点ID',
    required: true,
    type: String,
  })
  @ApiResWrapper(Number)
  getCartInfo(
    // Java: @RequestParam(required = true) String siteId
    @Query('siteId') siteId: string,
    @CommonHeaders() headers: CommonHeadersDto,
  ): number | null {
    // Java 代码: return CommonRes.success(null);
    return null;
  }
}
