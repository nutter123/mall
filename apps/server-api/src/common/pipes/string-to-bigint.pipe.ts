import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class StringToBigIntPipe implements PipeTransform<string, string> {
  transform(value: string): string {
    // 这里执行您的 BigInt.toString() 逻辑，确保安全
    if (value === undefined || value === null) {
      return value;
    }
    // 假设您正在将一个 Long 字符串转换为 String
    return value.toString();
  }
}