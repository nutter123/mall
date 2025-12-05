// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 1. 获取购物车总数 GET /v2-app-mall/cart/getCartCount */
export async function cartControllerGetCartCount(options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.Number }>('/v2-app-mall/cart/getCartCount', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 1. 获取购物车商品id GET /v2-app-mall/cart/getCartGoodsId */
export async function cartControllerGetCartGoodsId(options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.Cart }>('/v2-app-mall/cart/getCartGoodsId', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 2. 获取购物车信息 GET /v2-app-mall/cart/getCartInfo */
export async function cartControllerGetCartInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.CartControllerGetCartInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.Number }>('/v2-app-mall/cart/getCartInfo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
