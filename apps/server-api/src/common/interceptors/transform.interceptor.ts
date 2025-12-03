import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiCode, IApiResponse } from '../interfaces/response.interface';

/**
 * 公司统一响应结构接口
 */
export interface CompanyResponse<T> {
  status: number;      // 业务状态码 (公司用 200 表示成功)
  message: string;     // 系统消息 (success)
  prompt: string;      // 用户提示 (成功/登录成功)
  data: T;             // 业务数据
  error: null | any;   // 错误信息
  trace: null | string;// 链路ID
  system: null | any;  // 系统扩展信息
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, CompanyResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<CompanyResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        // 1. 如果 Controller 返回的数据里已经包含了 status，说明是手动组装的，直接返回
        if (data && data.status && data.data) {
          return data;
        }

        // 2. 默认包装逻辑
        return {
          status: 200,
          message: 'success',
          prompt: '操作成功', // 默认提示，Controller 可覆盖
          data: data || null,
          error: null,
          trace: null, // 后续接入 CLS 后这里填 traceId
          system: null,
        };
      }),
    );
  }
}
