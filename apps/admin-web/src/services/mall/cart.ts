// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /cart */
export async function cartControllerFindAll(options?: { [key: string]: any }) {
  return request<API.CartItem[]>('/cart', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /cart */
export async function cartControllerAdd(body: API.AddCartDto, options?: { [key: string]: any }) {
  return request<API.CartItem>('/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
