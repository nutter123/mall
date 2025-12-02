// 运行时配置
import { IApiResponse } from './types/index';
import type { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import { message } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { history, Link } from '@umijs/max';
import { AvatarDropdown, AvatarName, Footer, Question, SelectLang } from '@/components';
import defaultSettings from '../config/defaultSettings';
import '@ant-design/v5-patch-for-react-19';
import { queryCurrentUser } from './services';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate

const API_URL = 'http://localhost:3000';
const LOGIN_PATH = '/user/login';

// 1. 定义全局状态 (InitialState) 的类型
interface InitialState {
  settings?: LayoutSettings;
  currentUser?: API.CurrentUser; // 需要确认你的 typings.d.ts 里有这个定义，或者自己定义 interface
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}

// 2. 初始化逻辑：页面刷新时执行
export async function getInitialState(): Promise<InitialState> {
  // 定义获取用户信息的函数
  const fetchUserInfo = async () => {
    try {
      // 这里的 request 会走下面的 request配置，自动带 token
      // 注意：这里的 URL 不带 /api 前缀，直接对应 NestJS 的路由
      const msg = await queryCurrentUser();
      return msg;
    } catch (error) {
      // 如果 Token 失效或请求失败，跳转登录页
      history.push(LOGIN_PATH);
    }
    return undefined;
  };

  // 如果不是登录页，执行获取用户信息
  const { location } = history;
  if (location.pathname !== LOGIN_PATH) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings as LayoutSettings,
    };
  }

  return {
    fetchUserInfo,
    settings: defaultSettings as LayoutSettings,
  };
}
// 3. 布局配置 (Layout)
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    actionsRender: () => [<Question key="doc" />, <SelectLang key="SelectLang" />],
    avatarProps: {
      src: initialState?.currentUser?.avatar,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没登录，重定向到登录页
      if (!initialState?.currentUser && location.pathname !== LOGIN_PATH) {
        history.push(LOGIN_PATH);
      }
    },
    layoutBgImgList: [],
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    childrenRender: (children) => {
      return <>{children}</>;
    },
    ...initialState?.settings,
  };
};

export const request: RequestConfig = {
  baseURL: API_URL,
  timeout: 10000,

  // 1. Umi Max 推荐的错误处理配置 (专门处理 HTTP 状态码错误)
  errorConfig: {
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;

      if (error.response) {
        const { status, data } = error.response;

        // === 捕获 401 Unauthorized ===
        if (status === 401) {
          message.error('登录已过期，请重新登录');
          localStorage.removeItem('token');
          history.push(LOGIN_PATH);
        }
        // === 捕获 403 Forbidden ===
        else if (status === 403) {
          message.error(data?.msg || '您没有权限访问此资源');
        }
        // === 其他 HTTP 错误 ===
        else {
          message.error(data?.msg || '网络请求错误');
        }
      } else if (error.request) {
        // 请求发出但没有收到响应
        message.error('网络异常，无法连接到服务器');
      } else {
        message.error('请求配置错误');
      }
    },
  },

  // 2. 请求拦截器 (注入 Token)
  requestInterceptors: [
    (config: any) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
      return config;
    },
  ],

  // 3. 响应拦截器 (只处理业务数据解包，HTTP错误交给 errorConfig)
  responseInterceptors: [
    (response) => {
      const data = response.data as any;
      console.log('响应数据:', data);

      // 判断是否为后端返回的标准 JSON 结构
      if (data && typeof data === 'object' && 'code' in data) {
        // 业务成功
        if (data.code === 200) {
          return response; // 解包
        }
        // 业务失败 (如参数错误 40001)
        else {
          message.error(data.msg || '业务处理失败');
          return Promise.reject(data);
        }
      }

      // 非 JSON 响应 (如文件流) 原样返回
      return response;
    },
  ],
};

const isDev = process.env.NODE_ENV === 'development';
