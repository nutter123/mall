import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserService } from '../user.service';

@ApiTags('Admin - 用户管理')
@Controller('admin/user') 
export class AdminUserController {
  constructor(private readonly userService: UserService) {}

  @Post('getInfo') // 最终路径: POST /admin/user/getInfo
  @ApiOperation({ summary: '获取管理员信息' })
  async getInfo(@Body() dto: any) {
    // 调用通用的 Service
    // return this.userService.getAdminProfile(dto.userId);
  }

  @Post('list') // 最终路径: POST /admin/user/list
  async list(@Body() dto: any) {
    // return this.userService.findAll(dto);
  }
}