import { request } from '../utils/request';

// 定义登录返回结构
interface LoginRes {
  token: string;
  userId: string;
}

export class AuthService {
  // 核心登录流程
  static async login(): Promise<string> {
    // 1. 检查是否已有有效 Token (简单的非空检查，严谨点可以检查有效期)
    const token = wx.getStorageSync('token');
    if (token) return token;

    // 2. 调用微信原生登录，获取 code
    // 这是一个 Promise 包装，防止回调地狱
    const { code } = await wx.login();

    // 3. 把 code 发给后端
    try {
      const res = await request<LoginRes>('/auth/login/mp', {
        method: 'POST',
        data: { code },
      });

      // 4. 保存 Token 到本地
      wx.setStorageSync('token', res.token);
      wx.setStorageSync('userId', res.userId);

      return res.token;
    } catch (error) {
      console.error('登录失败', error);
      throw error;
    }
  }

  // 检查是否已登录
  static checkLogin(): boolean {
    return !!wx.getStorageSync('token');
  }
}
