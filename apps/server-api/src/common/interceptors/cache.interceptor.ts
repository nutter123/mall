import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Reflector } from '@nestjs/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CACHE_KEY_METADATA, CACHE_TTL_METADATA } from '../decorators/cacheable.decorator';

@Injectable()
export class HttpCacheInterceptor implements NestInterceptor {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private reflector: Reflector,
  ) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    // 1. 获取装饰器配置
    const handler = context.getHandler();
    const ttl = this.reflector.get(CACHE_TTL_METADATA, handler);
    // 如果没有加 @Cacheable 装饰器，直接放行
    if (!ttl) {
      return next.handle();
    }

    // 2. 生成 Cache Key
    // 规则：前缀:请求URL (例如: product:list:/products?page=1)
    const request = context.switchToHttp().getRequest();
    const prefix = this.reflector.get(CACHE_KEY_METADATA, handler) || 'http_cache';
    const key = `${prefix}:${request.url}`;

    // 3. 查缓存
    const cachedData = await this.cacheManager.get(key);
    if (cachedData) {
      // 💡 命中缓存，直接返回，不走 Controller 逻辑
      return of(cachedData);
    }

    // 4. 没命中，执行 Controller 逻辑，并存入缓存
    return next.handle().pipe(
      tap(async (data) => {
        await this.cacheManager.set(key, data, ttl * 1000); // 注意：v4版本 cache-manager ttl 单位是毫秒，v3是秒，这里需根据版本调整
      }),
    );
  }
}
