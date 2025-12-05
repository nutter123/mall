// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 1. 立即购买结算 POST /v2-app-mall/buyCalc */
export async function calcControllerBuyCalc(body: API.BuyCalcDTO, options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.CalcBuyVO }>('/v2-app-mall/buyCalc', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
