import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CommonRes } from '../dto/common-res.dto';
import { BusinessException } from '../exceptions/business.exception';

@Catch() // 空参数表示捕获所有异常
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    let businessCode = 500;
    let message = '系统内部异常';
    let prompt = '系统繁忙，请稍后再试';
    let errorDetail = exception;

    if (exception instanceof BusinessException) {
      httpStatus = exception.getStatus();
      businessCode = exception.getErrorCode();
      message = exception.message;
      prompt = exception.message; // 业务错误通常直接展示给用户
      errorDetail = null; // 业务异常不需要打印堆栈给前端
    } else if (exception instanceof HttpException) {
      httpStatus = exception.getStatus();
      businessCode = httpStatus; // 使用 HTTP 状态码作为业务码
      const res: any = exception.getResponse();
      // 处理 class-validator 的错误数组
      message = typeof res === 'object' && res.message ? res.message : exception.message;
      prompt = Array.isArray(message) ? message[0] : message;
    } else {
      console.error(`系统异常: ${request.method} ${request.url}`, exception);
    }

    const responseBody: CommonRes<null> = {
      status: businessCode,
      message: 'error', // 系统级 message
      prompt: prompt, // 用户级 prompt
      data: null,
      error: process.env.NODE_ENV === 'development' ? String(errorDetail) : null, // 开发环境可看堆栈
      trace: null, // 对接之前的 TraceID
      system: null,
    };

    // 发送响应
    response.status(httpStatus).json(responseBody);
  }
}
