type String = string;
type Number = number;
type Boolean = boolean;

export interface ISku {
  id?: string;
  price: number;
  stock: number;
  attributes: Record<string, string>;
}

export interface IProduct {
  id: string;
  title: string;
  description?: string;
  mainImage: string;
  images: string[];
  skus: ISku[];
  createdAt: Date;
}

// 简单的入参定义
export interface CreateProductDto {
  title: string;
  description?: string;
  mainImage: string;
  images?: string[];
  skus: ISku[];
}

export interface IApiResponse<T = any> {
  status: number; // 业务状态码 (200 为成功)
  message: string; // 系统消息 (success)
  prompt: string; // 用户提示 (操作成功)
  data: T; // 业务数据
  error: null | any; // 错误调试信息
  trace: null | string; // 链路ID
  system: null | any; // 系统扩展
}

export enum ApiCode {
  SUCCESS = 200,
  ERR_AUTH = 401, // 假设公司用 401 表示 token 过期
  ERR_SYS = 500,
}