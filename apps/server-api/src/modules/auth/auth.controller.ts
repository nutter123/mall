import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorators/public.decorator';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/mp')
  @Public()
  async loginMiniProgram(@Body('code') code: string) {
    return this.authService.loginMiniProgram(code);
  }

  @Public()
  @Post('admin/register')
  async registerAdmin(@Body() dto: any) {
    return this.authService.registerAdmin(dto);
  }

  @Public()
  @Post('admin/login')
  async loginAdmin(@Body() dto: any) {
    return this.authService.loginAdmin(dto);
  }

  @Get('admin/profile')
  async getAdminProfile(@CurrentUser() user: any) {
    // user 对象来自 JwtStrategy 的 validate 方法，包含 userId, username, role
    return {
      name: user.username,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      userid: user.userId,
      role: user.role || 'admin', // 既然是管理员后台，默认给 admin 角色
    };
  }
}
