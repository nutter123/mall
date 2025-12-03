import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  ParseBoolPipe,
} from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ApiCommonHeaders } from '../../common/decorators/api-common-headers.decorator';
import { ApiResWrapper } from '../../common/decorators/api-res-wrapper.decorator';
import { CommonHeaders } from '../../common/decorators/common-headers.decorator';
import type { CommonHeadersDto } from '../../common/decorators/common-headers.decorator';
import { GetNewUserCouponResVO } from './vo/GetNewUserCouponRes.vo';
import { UserCouponInfoVO } from './vo/UserCouponInfo.vo';
import { GetCouponDrawCouponVO } from './vo/GetCouponDrawCoupon.vo';
import { ApiCommonHeadersWithoutSiteId } from '../../common/decorators/api-common-headers-without-site-id.decorator';
import { StringToBigIntPipe } from '../../common/pipes/string-to-bigint.pipe';

@ApiTags('优惠券管理') // 对应 @Tag(name = "优惠券管理")
@Controller('coupon')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  /**
   * 9.查询用户新人优惠券
   */
  @Get('getNewUserCoupon')
  @ApiOperation({ summary: '9.查询用户新人优惠券' })
  @ApiCommonHeaders()
  @ApiQuery({ name: 'siteId', description: '站点ID', type: Number })
  @ApiResWrapper(GetNewUserCouponResVO) // 自动包装 CommonRes<GetNewUserCouponResVO>
  async getNewUserCoupon(
    // NestJS 使用 @Query 接收参数，使用 ParseIntPipe 确保类型是 number
    @Query('siteId', ParseIntPipe) siteId: number,
    @CommonHeaders() headers: CommonHeadersDto,
  ): Promise<GetNewUserCouponResVO> {
    return this.couponService.getNewUserCoupon(siteId);
  }

  /**
   * 34. 新人优惠券信息
   */
  @Get('getNewUserCouponInfo')
  @ApiOperation({ summary: '34. 新人优惠券信息' })
  @ApiCommonHeaders()
  @ApiQuery({ name: 'siteId', description: '站点ID', type: Number })
  @ApiResWrapper(UserCouponInfoVO)
  getNewUserCouponInfo(
    @Query('siteId', ParseIntPipe) siteId: number,
    @CommonHeaders() headers: CommonHeadersDto,
  ): UserCouponInfoVO {
    // Java 模拟数据：
    const couponVO = new UserCouponInfoVO();
    couponVO.haveExchange = false;
    couponVO.totalAmount = 8490;
    return couponVO;
  }

  /**
   * 13.用户优惠券过期提醒数量
   */
  @Get('getUserOverdueNum')
  @ApiOperation({ summary: '13.用户优惠券过期提醒数量' })
  @ApiCommonHeaders()
  @ApiResWrapper(Number) // 返回 CommonRes<Integer> 对应 CommonRes<Number>
  getUserOverdueNum(): number {
    const num = 0;
    return num;
  }

  /**
   * 18.领券优惠券列表
   */
  @Get('getCouponDrawCoupon')
  @ApiOperation({ summary: '18.领券优惠券列表' })
  @ApiCommonHeaders()
  @ApiQuery({ name: 'siteId', description: '站点ID', type: Number })
  @ApiResWrapper(GetCouponDrawCouponVO) // 自动包装 CommonRes<List<GetCouponDrawCouponVO>>
  async getCouponDrawCoupon(
    @Query('siteId', ParseIntPipe) siteId: number,
    @CommonHeaders() headers: CommonHeadersDto,
  ): Promise<GetCouponDrawCouponVO[]> {
    // Java 模拟数据：
    const couponVOList: GetCouponDrawCouponVO[] = [];
    const couponVO = new GetCouponDrawCouponVO();
    couponVO.id = '1336225486210605056'; // BigInt 转换为 String
    couponVO.limitAmount = true;
    couponVO.limitAmountMin = 12300;
    couponVO.discountMinus = 100;
    couponVO.discountType = 'minus';
    couponVOList.push(couponVO);
    return couponVOList;
  }

  /**
   * 14.查询商品可用优惠券列表
   */
  @Get('getSelfCoupon')
  @ApiOperation({ summary: '14.查询商品可用优惠券列表' })
  @ApiCommonHeadersWithoutSiteId() // 对应 @CommonHeadersWithoutSiteId
  @ApiResWrapper(GetCouponDrawCouponVO) // 返回 CommonRes<List<GetCouponDrawCouponVO>>
  @ApiQuery({ name: 'goodsId', description: '商品ID', type: String })
  @ApiQuery({ name: 'siteId', description: '站点ID', type: Number })
  @ApiQuery({
    name: 'combo',
    description: '是有展示券包',
    required: false,
    type: Boolean,
    example: false,
  })
  @ApiQuery({
    name: 'promotionId',
    description: '活动id',
    required: false,
    type: String,
    example: 0,
  })
  getSelfCoupon(
    // @Query 参数转换：使用 Pipe 进行类型校验和默认值设置
    @Query('goodsId', StringToBigIntPipe) goodsId: string,
    @Query('siteId', ParseIntPipe) siteId: number,
    @Query('combo', new DefaultValuePipe(false), ParseBoolPipe) combo: boolean,
    @Query('promotionId', new DefaultValuePipe('0')) promotionId: string, // Long 转换为 string
    @CommonHeaders() headers: CommonHeadersDto,
  ): GetCouponDrawCouponVO[] {
    // 实际调用 service 逻辑
    return [];
  }

  /**
   * 19.领取优惠券（单张）
   */
  @Post('drawCouponOne')
  @ApiOperation({ summary: '19.领取优惠券（单张）' })
  @ApiCommonHeaders()
  @ApiQuery({ name: 'id', description: '优惠券ID', type: String })
  @ApiQuery({ name: 'lat', description: '纬度', required: false, type: String })
  @ApiQuery({ name: 'lng', description: '经度', required: false, type: String })
  @ApiResWrapper(GetCouponDrawCouponVO) // 返回 CommonRes<GetCouponDrawCouponVO>
  drawCouponOne(
    @Query('id', StringToBigIntPipe) id: string,
    @Query('lat') lat: string,
    @Query('lng') lng: string,
    @CommonHeaders() headers: CommonHeadersDto,
  ): GetCouponDrawCouponVO {
    // 实际调用 service 逻辑
    return new GetCouponDrawCouponVO();
  }
}
