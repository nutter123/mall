import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from '../auth.service';
import { MpLoginDto, MpLoginVo, MpUserInfoVo } from '../dto/mp-auth.dto';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../../common/decorators/user.decorator';
import { Public } from '../../../common/decorators/public.decorator';

@ApiTags('v2-app-mall - 小程序认证模块')
@Controller('v2-app-mall') // 统一前缀
export class AppAuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token/getByWechatMp')
  @Public() // 公开接口
  @ApiOperation({ 
    summary: '微信小程序登录', 
    operationId: 'mpLogin',
    description: '通过 jsCode 获取 Token，完全兼容公司接口格式'
  })
  @ApiResponse({ status: 200, type: MpLoginVo })
  async login(@Body() dto: MpLoginDto) {
    // 调用 Service 获取核心数据
    const result = await this.authService.loginMiniProgram(dto.jsCode);
    
    // 组装成公司接口的形状 (Adapter Pattern)
    return {
      unionId: result.openId, // 暂时用 openid 模拟 unionid
      openId: result.openId,
      token: result.token,
      haveAuthorization: true,
      secondPhoneVo: null, // 兼容字段
    };
  }

  @Get('info/get')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ 
    summary: '获取当前用户信息', 
    operationId: 'getMpUserInfo',
    description: '返回包含等级、分销状态等复杂信息的大对象'
  })
  @ApiResponse({ status: 200, type: MpUserInfoVo })
  async getInfo(@CurrentUser() user: any) {
    // 这里应该调用 userService.findOne(user.userId)
    // 暂时用 Mock 数据演示结构对齐
    return {
      id: user.userId,
      userName: '',
      phone: '186****6501', // 后面从 DB 拿
      nickName: '微信用户',
      gender: 'secret',
      birthday: null,
      picture: '',
      levelId: '1',
      experience: 0,
      integral: 0,
      oftenCity: '',
      oftenSiteId: '1',
      hasPassword: false,
      payPasswordDisplay: false,
      hasPayPassword: false,
      newUser: true,
      isSvip: false,
      svipType: null,
      godUser: false,
      levelName: 'VIP1', // 后面做会员系统时动态读取
      tianCai: false,
      icon: 'https://outside-test-a-static.v2.jiuxiao2.cn/outside/fms/img/c5509ce0b5f049b58e2d91219b2e18b8.png',
      totalAmount: null,
      retailer: true,
      retailType: 3
    };
  }
}