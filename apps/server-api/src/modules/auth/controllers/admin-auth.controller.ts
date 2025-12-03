import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from '../auth.service';
import { AdminLoginDto } from '../dto/admin-auth.dto';
import { Public } from '../../../common/decorators/public.decorator';

@ApiTags('test-api - 管理后台认证模块')
@Controller('test-api/user') // 复刻公司后台路径
export class AdminAuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  @ApiOperation({ 
    summary: '管理员账号登录', 
    operationId: 'adminLogin',
    description: '返回 Token 字符串，直接放在 data 字段中'
  })
  async login(@Body() dto: AdminLoginDto) {
    // 1. 调用 Service 验证密码
    const result = await this.authService.loginAdmin({
      username: dto.userName, // 字段映射: userName -> username
      password: dto.password
    });

    // 2. 构造特殊响应：公司的 data 直接就是一个 Token 字符串，而不是对象
    //    这里我们需要手动组装响应，以覆盖默认的拦截器逻辑(或者拦截器里判断 data 类型)
    //    但为了方便，我们利用拦截器的特性：拦截器会把 return 的值塞进 data
    return result.token; 
  }
}