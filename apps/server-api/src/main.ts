import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  // 替换默认 Logger
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  app.setGlobalPrefix('v2-app-mall', {
    exclude: [
      'test-api/(.*)', // 如果你有 admin 开头的也排除
    ],
  });

  // 配置全局跨域
  app.enableCors();

  // 注册全局响应拦截器 (成功时的包装)
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalInterceptors(new LoggingInterceptor(app.get(WINSTON_MODULE_NEST_PROVIDER)));

  // 注册全局异常过滤器 (失败时的包装)
  app.useGlobalFilters(new AllExceptionsFilter());

  // 开启全局验证管道
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 自动剔除 DTO 中未定义的参数（防止黑客乱传参）
      transform: true, // 自动把参数转换为 DTO 实例
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Mall 全栈商城 API')
    .setDescription('基于 NestJS + React + 小程序的微商城接口文档')
    .setVersion('1.0')
    .addApiKey(
      {
        type: 'apiKey', // 指定安全方案类型为 API Key
        name: 'jxe-token', // 指定 HTTP Header 的名称
        in: 'header', // 指定位置为头部
        description: '用于调试的自定义 Token',
      },
      'jxe-token-auth', // 安全定义名称，在代码中引用
    )
    .addSecurityRequirements({
      'jxe-token-auth': [], // Key为安全定义名称，值[]为空的Scopes
    })
    .build();

  // 只在开发环境或测试环境开启文档
  if (process.env.NODE_ENV !== 'production') {
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document, {
      jsonDocumentUrl: 'api-docs/json', // 提供 JSON 格式供前端代码生成工具使用
    });
  }

  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000`);
  console.log(`Swagger documentation: http://localhost:3000/api-docs`);
}
bootstrap();
