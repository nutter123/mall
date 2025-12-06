import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonRes } from '../dto/common-res.dto';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, CommonRes<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<CommonRes<T>> {
    return next.handle().pipe(
      map((data) => {
        // 1. 如果 Controller 返回的数据里已经包含了 status，说明是手动组装的，直接返回
        if (data && data.status && data.data) {
          return data;
        }

        // 2. 默认包装逻辑
        return CommonRes.success(data);
      }),
    );
  }
}
