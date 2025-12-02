import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ClsService, CLS_ID } from 'nestjs-cls';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  constructor(private readonly cls: ClsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, body } = request;
    const startTime = Date.now();

    let traceId = '';
    try {
      // 方式A: 尝试直接获取 (有些版本支持)
      // @ts-ignore
      if (typeof this.cls.getId === 'function') {
        // @ts-ignore
        traceId = this.cls.getId();
      }
      // 方式B: 使用常量 Key 获取 (最稳妥)
      else {
        traceId = this.cls.get(CLS_ID);
      }
    } catch (e) {
      // 忽略 CLS 错误
    }

    if (!traceId) {
      traceId = request.headers['x-trace-id'] || request.id || 'no-trace';
    }

    return next.handle().pipe(
      tap((data) => {
        const duration = Date.now() - startTime;

        this.logger.log({
          traceId,
          method,
          url,
          duration: `${duration}ms`,
        });
      }),
    );
  }
}
