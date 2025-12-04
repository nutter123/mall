export class Util {
  static generatePhone() {
    // 生成第二位 (1-9)
    const secondDigit = Math.floor(Math.random() * 9) + 1;

    // 生成后九位 (0-999999999)
    // 使用 padStart 确保始终是 9 位数字，前面不足用 '0' 填充
    const lastNineDigits = Math.floor(Math.random() * 1000000000)
        .toString()
        .padStart(9, '0');

    // 拼接返回
    return `1${secondDigit}${lastNineDigits}`;
  }
}