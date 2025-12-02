import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddCartDto } from './dto/create-cart.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/user.decorator';

@Controller('cart')
@UseGuards(JwtAuthGuard) // 🔒 整个 Controller 都需要登录
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  add(@CurrentUser() user: any, @Body() dto: AddCartDto) {
    // user.userId 来自我们刚才写的装饰器
    return this.cartService.addToCart(user.userId, dto);
  }

  @Get()
  findAll(@CurrentUser() user: any) {
    return this.cartService.findAll(user.userId);
  }
}
