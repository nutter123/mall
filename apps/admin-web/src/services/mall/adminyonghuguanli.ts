// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取管理员信息 POST /admin/user/getInfo */
export async function adminUserControllerGetInfo(options?: { [key: string]: any }) {
  return request<any>('/admin/user/getInfo', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /admin/user/list */
export async function adminUserControllerList(options?: { [key: string]: any }) {
  return request<any>('/admin/user/list', {
    method: 'POST',
    ...(options || {}),
  });
}
