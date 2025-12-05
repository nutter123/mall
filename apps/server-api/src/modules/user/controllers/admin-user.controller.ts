import { Controller, Get, Post, Body, UseGuards, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserService } from '../user.service';
import { LoginAdminDto } from '../dto/login.dto';
import { CreateAdminUserDto, UpdateAdminUserDto } from '../dto/admin-user.dto';

@ApiTags('AdminUser')
@Controller('test-api/user')
export class AdminUserController {
  constructor(private readonly userService: UserService) {}

  // 增删改查
  @Post('/')
  @ApiOperation({ summary: '创建用户',operationId: 'createAdminUser' })
  async create(@Body() dto: CreateAdminUserDto) {
    return this.userService.create(dto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: '删除用户',operationId: 'deleteAdminUser' })
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  @Delete('/')
  @ApiOperation({ summary: '批量删除用户',operationId: 'deleteManyAdminUser' })
  async deleteMany(@Body() ids: string[]) {
    return this.userService.deleteMany(ids);
  }

  @Put('/:id')
  @ApiOperation({ summary: '更新用户',operationId: 'updateAdminUser' })
  async update(@Param('id') id: string, @Body() dto: UpdateAdminUserDto) {
    return this.userService.update(id, dto);
  }

  @Get('/:id')
  @ApiOperation({ summary: '查询用户',operationId: 'findAdminUserById' })
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get('/')
  @ApiOperation({ summary: '批量查询用户',operationId: 'findAllAdminUser' })
  async findAll() {
    return this.userService.findAll();
  }

  @Post('login')
  @ApiOperation({ summary: '管理员登录',operationId: 'loginAdminUser' })
  async login(@Body() dto: LoginAdminDto): Promise<string> {
    return this.userService.login(dto);
  }

  @Post('register')
  @ApiOperation({ summary: '管理员注册',operationId: 'registerAdminUser' })
  async register(@Body() dto: CreateAdminUserDto) {
    return this.userService.create(dto);
  }
}
