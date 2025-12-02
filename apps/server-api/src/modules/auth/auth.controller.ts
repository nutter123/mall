import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/mp')
  @Public()
  async loginMiniProgram(@Body('code') code: string) {
    return this.authService.loginMiniProgram(code);
  }
}
