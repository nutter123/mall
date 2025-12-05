// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 1. 新增商品 POST /v2-app-mall/goods/add */
export async function goodsControllerAdd(body: API.GoodDTO, options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.String }>('/v2-app-mall/goods/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 2. 获取商品购买信息 GET /v2-app-mall/goods/getBuyNotCombo */
export async function goodsControllerGetBuyNotCombo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GoodsControllerGetBuyNotComboParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.GoodBuyInfoVO }>('/v2-app-mall/goods/getBuyNotCombo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 14. 获取套餐列表 GET /v2-app-mall/goods/getCombo */
export async function goodsControllerGetCombo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GoodsControllerGetComboParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.GoodBaseInfoVO }>('/v2-app-mall/goods/getCombo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 1. 获取商品详情 GET /v2-app-mall/goods/getDetail */
export async function goodsControllerGetDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GoodsControllerGetDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.GoodDetailInfoVO }>('/v2-app-mall/goods/getDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
