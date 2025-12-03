// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /auth/admin/login */
export async function authControllerLoginAdmin(options?: { [key: string]: any }) {
  return request<any>('/auth/admin/login', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /auth/admin/profile */
export async function authControllerGetAdminProfile(options?: { [key: string]: any }) {
  return request<any>('/auth/admin/profile', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /auth/admin/register */
export async function authControllerRegisterAdmin(options?: { [key: string]: any }) {
  return request<any>('/auth/admin/register', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /auth/login/mp */
export async function authControllerLoginMiniProgram(options?: { [key: string]: any }) {
  return request<any>('/auth/login/mp', {
    method: 'POST',
    ...(options || {}),
  });
}
