// 运行时配置
import { IApiResponse } from './types/index';
import { RequestConfig } from '@umijs/max';
import { message } from 'antd';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const request: RequestConfig = {
  timeout: 10000,
  // 响应拦截器
  responseInterceptors: [
    (response) => {
      const { data } = response as { data: IApiResponse<any> }; // 这里的 data 是后端返回的完整 JSON { code, data, msg }

      if (data.code === 200) {
        // 如果成功，直接返回内部的 data
        return data.data;
      } else {
        // 业务错误处理
        message.error(data.msg || '系统繁忙');
        // 抛出错误阻断流程
        return Promise.reject(data);
      }
    },
  ],
};

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};
