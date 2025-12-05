import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { CommonService } from './common.service';
import { CreateCommonDto } from './dto/create-common.dto';
import { UpdateCommonDto } from './dto/update-common.dto';
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {MallHeaders} from "../../common/decorators/mall-headers.decorator";
import {ApiResWrapper} from "../../common/decorators/api-res-wrapper.decorator";
import {CommonHeaders} from "../../common/decorators/common-headers.decorator";
import type {CommonHeadersDto} from "../../common/decorators/common-headers.decorator";
import {GetByWechatMpReqVO} from "../token/vo/GetByWechatMpReq.vo";
import {GetStopResVO} from "./vo/GetStopRes.vo";
import {SubscribeMessageReqVO} from "./vo/SubscribeMessageReq.vo";
import { Public } from '@/common/decorators/public.decorator';

@ApiTags('通用管理') // 对应 @Tag(name = "通用管理")
@Controller('common')
@Public()
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Get('getStop')
  @ApiOperation({ summary: '6. 获取停业配置' })
  @MallHeaders() // 对应 @CommonHeaders
  @ApiResWrapper(GetStopResVO) // 自动包装 CommonRes<GetStopResVO>
  getStop(@CommonHeaders() headers: CommonHeadersDto): Promise<GetStopResVO> {
    // Java 代码: return CommonRes.success(commonService.getStop());
    // NestJS: Service 返回 VO，Interceptor 自动包装
    return this.commonService.getStop(headers);
  }

  @Post('getByWechatMp')
  @ApiOperation({ summary: '通过微信小程序获取Token', description: '根据微信小程序参数获取用户Token' })
  @ApiResponse({ status: 200, type: String }) // 对应 Java 返回 String
  getByWechatMp(
    // Java: @Valid @RequestParam GetByWechatMpReqVO reqVO)
    // NestJS: 使用 @Query 接收整个 DTO 对象，全局 ValidationPipe 会校验
    @Query() reqVO: GetByWechatMpReqVO,
  ): string {
    // 实际业务逻辑应在 Service 中处理
    return '';
  }

  @Post('subscribeMessage')
  @ApiOperation({ summary: '18. 消息订阅' })
  @MallHeaders() // 对应 @CommonHeaders
  @ApiResWrapper(Boolean) // 自动包装 CommonRes<Boolean>
  @ApiBody({ type: SubscribeMessageReqVO, description: '消息订阅 VO' })
  subscribeMessage(
    // Java: @Valid @RequestBody SubscribeMessageReqVO reqVO)
    // NestJS: 使用 @Body 接收 DTO 对象，全局 ValidationPipe 会校验
    @Body() reqVO: SubscribeMessageReqVO,
  ): Promise<boolean> {
    // 实际业务逻辑应在 Service 中处理
    // return this.commonService.subscribeMessage(reqVO);
    return Promise.resolve(true);
  }
}
