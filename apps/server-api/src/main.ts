import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 配置全局跨域
  app.enableCors();

  // 注册全局响应拦截器 (成功时的包装)
  app.useGlobalInterceptors(new TransformInterceptor());

  // 注册全局异常过滤器 (失败时的包装)
  app.useGlobalFilters(new AllExceptionsFilter());

  // 开启全局验证管道
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 自动剔除 DTO 中未定义的参数（防止黑客乱传参）
      transform: true, // 自动把参数转换为 DTO 实例
    }),
  );

  await app.listen(3000);
}
bootstrap();
