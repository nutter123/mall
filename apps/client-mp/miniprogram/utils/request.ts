import type { IApiResponse } from '../types/index';
// 定义后端地址 (注意：小程序要求 HTTPS，本地开发需要在开发者工具勾选 "不校验合法域名")
const BASE_URL = 'http://localhost:3000';

export const request = <T>(
  path: string,
  options: WechatMiniprogram.RequestOption = {
    url: '',
  },
): Promise<T> => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...options,
      url: `${BASE_URL}${path}`,
      header: {
        'Content-Type': 'application/json',
        ...options.header,
        // 后面做登录时，在这里统一注入 Token
        // 'Authorization': `Bearer ${wx.getStorageSync('token')}`
      },
      success: (res) => {
        const apiRes = res.data as IApiResponse<T>;
        if (apiRes.code === 200) {
          resolve(apiRes.data);
        } else {
          wx.showToast({ title: apiRes.msg || '请求失败', icon: 'none' });
          reject(apiRes);
        }
      },
      fail: (err) => {
        wx.showToast({ title: '网络异常', icon: 'none' });
        reject(err);
      },
    });
  });
};
