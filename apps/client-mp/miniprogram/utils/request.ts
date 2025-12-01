// 定义后端地址 (注意：小程序要求 HTTPS，本地开发需要在开发者工具勾选 "不校验合法域名")
const BASE_URL = 'http://localhost:3000';

export const request = <T>(path: string, options: WechatMiniprogram.RequestOption = {}): Promise<T> => {
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
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as T);
        } else {
          // 这里可以统一处理报错，比如弹窗提示
          wx.showToast({ title: '请求失败', icon: 'none' });
          reject(res);
        }
      },
      fail: (err) => {
        wx.showToast({ title: '网络异常', icon: 'none' });
        reject(err);
      },
    });
  });
};
