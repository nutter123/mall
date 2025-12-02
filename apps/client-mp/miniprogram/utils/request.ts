import type { IApiResponse } from '../types/index';
// 定义后端地址 (注意：小程序要求 HTTPS，本地开发需要在开发者工具勾选 "不校验合法域名")
const BASE_URL = 'http://localhost:3000';

export const request = <T>(path: string, options: Omit<WechatMiniprogram.RequestOption, 'url'>): Promise<T> => {
  return new Promise((resolve, reject) => {
    const token = wx.getStorageSync('token');

    const header = {
      'Content-Type': 'application/json',
      ...(options?.header ?? {}),
    };

    if (token) {
      header['Authorization'] = `Bearer ${token}`;
    }

    wx.request({
      ...options,
      url: `${BASE_URL}${path}`,
      header,
      success: (res) => {
        const apiRes = res.data as IApiResponse<T>;

        if (res.statusCode === 401) {
          wx.removeStorageSync('token'); // 清除脏数据
          wx.showToast({ title: '登录已过期', icon: 'none' });
          // 这里可以触发重新登录逻辑，暂时先 reject
          reject(apiRes);
          return;
        }

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
