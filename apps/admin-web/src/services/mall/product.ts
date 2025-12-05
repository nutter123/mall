// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /v2-app-mall/products */
export async function productControllerFindAll(options?: { [key: string]: any }) {
  return request<API.Product[]>('/v2-app-mall/products', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v2-app-mall/products */
export async function productControllerCreate(body: API.CreateProductDto, options?: { [key: string]: any }) {
  return request<any>('/v2-app-mall/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2-app-mall/products/${param0} */
export async function productControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ProductControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Product>(`/v2-app-mall/products/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
