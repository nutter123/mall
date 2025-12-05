// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /v2-app-mall/upload */
export async function uploadControllerUpload(options?: { [key: string]: any }) {
  return request<any>('/v2-app-mall/upload', {
    method: 'POST',
    ...(options || {}),
  });
}
