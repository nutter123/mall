// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /v2-app-mall */
export async function appControllerGetHello(options?: { [key: string]: any }) {
  return request<string>('/v2-app-mall', {
    method: 'GET',
    ...(options || {}),
  });
}
