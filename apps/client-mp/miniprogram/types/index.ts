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
  code: number;
  data: T;
  msg: string;
}

export enum ApiCode {
  SUCCESS = 200,
  ERR_PARAM = 400,
  ERR_AUTH = 401,
  ERR_FORBIDDEN = 403,
  ERR_SYSTEM = 500,
}
