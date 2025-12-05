import { Controller, Get, Post, Body, UseGuards, Put, Param, Delete, Query, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserService } from '../user.service';
import { LoginAdminDto } from '../dto/login.dto';
import { CreateAdminUserDto, QueryAdminUserDto, UpdateAdminUserDto } from '../dto/admin-user.dto';
import { Public } from '@/common/decorators/public.decorator';
import { CommonRes } from '@/common/dto/common-res.dto';
import { CurrentUser } from '@/common/decorators/user.decorator';
import { AdminUser } from '../entities/admin-user.entity';
import { ApiResWrapper } from '@/common/decorators/api-res-wrapper.decorator';
import { AdminUserVo } from '../vo/admin-user.vo';
import { UserConverter } from '../user.converter';
import { CommonPageRes } from '@/common/dto/common-page.dto';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';

@ApiTags('AdminUser')
@Controller('test-api/user')
export class AdminUserController {
  constructor(
    private readonly userService: UserService,
    private readonly userConverter: UserConverter,
  ) {}

  // 增删改查
  @Post('/')
  @ApiOperation({ summary: '创建用户', operationId: 'createAdminUser' })
  @ApiResWrapper(AdminUserVo)
  async create(@Body() dto: CreateAdminUserDto) {
    return CommonRes.success(this.userConverter.toAdminUserVo(await this.userService.create(dto)));
  }

  @Delete('/:id')
  @ApiOperation({ summary: '删除用户', operationId: 'deleteAdminUser' })
  @ApiResWrapper(Boolean)
  async delete(@Param('id') id: string) {
    return CommonRes.success(await this.userService.delete(id));
  }

  @Delete('/')
  @ApiOperation({ summary: '批量删除用户', operationId: 'deleteManyAdminUser' })
  @ApiResWrapper(Boolean)
  async deleteMany(@Body() ids: string[]) {
    return CommonRes.success(await this.userService.deleteMany(ids));
  }

  @Put('/:id')
  @ApiOperation({ summary: '更新用户', operationId: 'updateAdminUser' })
  @ApiResWrapper(Boolean)
  async update(@Param('id') id: string, @Body() dto: UpdateAdminUserDto) {
    return CommonRes.success(await this.userService.update(id, dto));
  }

  @Get('/:id')
  @ApiOperation({ summary: '查询用户', operationId: 'findAdminUserById' })
  @ApiResWrapper(AdminUserVo)
  async findOne(@Param('id') id: string) {
    return CommonRes.success(await this.userService.findOne(id));
  }

  @Get('/')
  @ApiOperation({ summary: '批量查询用户', operationId: 'findAllAdminUser' })
  @ApiResWrapper(CommonPageRes<AdminUserVo>)
  async findAll(
    @Query(new ValidationPipe({ transform: true })) reqVO: QueryAdminUserDto,
  ) {
    return CommonRes.success(await this.userService.findPage(reqVO));
  }

  @Post('login')
  @ApiOperation({ summary: '管理员登录', operationId: 'loginAdminUser' })
  @Public()
  @ApiResWrapper(String)
  async login(@Body() dto: LoginAdminDto) {
    return CommonRes.success(await this.userService.login(dto));
  }

  @Post('register')
  @ApiOperation({ summary: '管理员注册', operationId: 'registerAdminUser' })
  @Public()
  @ApiResWrapper(AdminUserVo)
  async register(@Body() dto: CreateAdminUserDto) {
    return CommonRes.success(this.userConverter.toAdminUserVo(await this.userService.create(dto)));
  }

  @Get('profile')
  @ApiOperation({ summary: '查询当前登录用户信息', operationId: 'getCurrentAdminUserProfile' })
  @ApiResWrapper(AdminUserVo)
  async getCurrentAdminUserProfile(@CurrentUser() currentUser: AdminUser) {
    return CommonRes.success(this.userConverter.toAdminUserVo(await this.userService.getProfile(currentUser.id)));
  }
}
