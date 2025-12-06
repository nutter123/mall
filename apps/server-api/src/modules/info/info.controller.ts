import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { InfoService } from './info.service';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommonHeaders } from '../../common/decorators/common-headers.decorator';
import { MallHeaders } from '../../common/decorators/mall-headers.decorator';
import { MallHeadersWithoutSiteId } from '../../common/decorators/mall-headers.decorator';
import type { CommonHeadersDto } from '../../common/decorators/common-headers.decorator';
import { ApiResWrapper } from '../../common/decorators/api-res-wrapper.decorator';
import { UserService } from '../user/user.service';
import { User } from '../member/entities/user.entity';
import { CommonHeadersWithoutSiteId, CommonHeadersWithoutSiteIdDto } from '@/common/decorators/common-headers-without-site-id.decorator';
import { MemberService } from '../member/member.service';
import { AllInfoVO } from '../member/vo/all-info.vo';

@ApiTags('个人信息接口')
@Controller('info')
export class InfoController {
  constructor(
    private readonly infoService: InfoService,
    private readonly memberService: MemberService,
  ) {}

  @Get('/get')
  @ApiOperation({summary: '1. 获取个人信息'})
  @MallHeaders()
  @ApiResWrapper(User)
  async get(@CommonHeaders() headers: CommonHeadersDto): Promise<User> {
    return await this.memberService.getUserInfo();
  }



  @Get('getAllInfo') // 对应 @GetMapping("/getAllInfo")
  @ApiOperation({summary: '13. 用户中心所需数据'})
  @MallHeaders() // 对应 @CommonHeaders
  @ApiResWrapper(AllInfoVO)
  async getAllInfo(
    // 对应 @RequestParam Integer siteId 和 @Parameter(description = "站点ID")
    @Query('siteId') siteId: number,
    // 可以继续获取 Headers
    @CommonHeadersWithoutSiteId() headers: CommonHeadersWithoutSiteIdDto,
  ): Promise<AllInfoVO> {
    // Java 代码: return CommonRes.success(userService.getAllInfo(siteId));
    // NestJS: Service 返回 AllInfoVO 对象
    return await this.memberService.getAllInfo(siteId);
  }
}
