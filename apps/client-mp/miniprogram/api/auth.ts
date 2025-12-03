import { request } from '../utils/request';

// 定义符合公司接口返回的登录数据结构
interface MpLoginRes {
  token: string;
  openId: string;
  unionId: string;
  haveAuthorization: boolean;
}

export class AuthService {
  static async login(): Promise<string> {
    const token = wx.getStorageSync('token');
    if (token) return token;

    const { code } = await wx.login();

    try {
      const res = await request<MpLoginRes>('/v2-app-mall/token/getByWechatMp', {
        method: 'POST',
        data: {
          appid: 'wx38d12f1dda8b9cac', // 使用你提供的 Mock AppID
          jsCode: code,
        },
      });

      wx.setStorageSync('token', res.token);
      // 注意：公司接口没直接返回 userId，可能需要解码 Token 或调 /info/get 获取
      // 这里暂时只存 token

      return res.token;
    } catch (error) {
      console.error('登录失败', error);
      throw error;
    }
  }

  static checkLogin(): boolean {
    return !!wx.getStorageSync('token');
  }
}
