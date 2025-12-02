import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ApiCode, IApiResponse } from '../interfaces/response.interface';

@Catch() // 捕获所有异常
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // 1. 判断是否为预知的 HttpException (如 404, 400)
    const isHttpException = exception instanceof HttpException;

    // 2. 确定 HTTP 状态码
    const httpStatus = isHttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    // 3. 确定业务状态码和错误信息
    let apiCode = ApiCode.ERR_SYSTEM;
    let msg = 'Internal server error';

    if (isHttpException) {
      apiCode = httpStatus; // 这里简单将 HTTP 码对应为业务码
      const res: any = exception.getResponse();
      // NestJS 默认报错 msg 有时是数组，有时是字符串，这里做个兼容
      msg = typeof res === 'object' && res.message ? res.message : res;
    } else {
      // 打印未知错误的堆栈，方便排查
      console.error(exception);
    }

    // 4. 发送统一 JSON
    response.status(httpStatus).json({
      code: apiCode,
      data: null,
      msg: Array.isArray(msg) ? msg[0] : msg, // 如果是数组取第一条
    });
  }
}
