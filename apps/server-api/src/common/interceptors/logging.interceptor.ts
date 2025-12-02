import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ClsService } from 'nestjs-cls';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  constructor(private readonly cls: ClsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, body } = request;
    const startTime = Date.now();

    // 从 CLS 中获取 TraceID
    const traceId = this.cls.getId();

    return next.handle().pipe(
      tap((data) => {
        const duration = Date.now() - startTime;

        // 打印结构化日志
        this.logger.log({
          traceId, // 🔑 关键：链路ID
          method,
          url,
          duration: `${duration}ms`,
          // body,       // 注意：生产环境尽量不要打印 body，防止泄露密码等敏感信息
          // response: data, // 响应体同理，按需开启
        });
      }),
    );
  }
}
