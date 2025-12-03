import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserService } from '../user.service';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard'; // C端用户守卫

@ApiTags('App - 通用接口')
@Controller('v2-app-mall/common') // 👈 核心：完全复刻小程序的奇葩路径
export class AppUserController {
  constructor(private readonly userService: UserService) {}

  @Get('getStop') // 最终路径: GET /v2-app-mall/common/getStop
  @ApiOperation({ summary: '获取店铺营业状态' })
  async getStop() {
    // 复用 Service 逻辑，或者调用专门针对 C 端的逻辑
    // return this.userService.checkShopStatus();
  }
  
  // 假设小程序还有一个 v2-app-mall/user/profile
  // 你可以在这里加，或者再开一个 AppProfileController
}