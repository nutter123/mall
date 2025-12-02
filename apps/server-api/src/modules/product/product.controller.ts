import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products') // 路由前缀: /products
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    // @Body() 会自动把请求体里的 JSON 映射成 CreateProductDto 对象
    // 并触发 class-validator 的校验规则
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id') // 路由变成 /products/:id
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }
}
