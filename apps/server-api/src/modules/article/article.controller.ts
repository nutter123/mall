import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { ApiOperation } from '@nestjs/swagger';
import { Article } from './entities/article.entity';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  @ApiOperation({ summary: '7. 获取指定类型文章' })
  getByType(@Query('type') type: string): Promise<Article[]> {
    return this.articleService.getByType(type);
  }
}
