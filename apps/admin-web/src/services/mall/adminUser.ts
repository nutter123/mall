// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 批量查询用户 GET /test-api/user */
export async function findAllAdminUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findAllAdminUserParams,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes & { data?: API.CommonPageRes & { records?: API.AdminUserVo[] } }>('/test-api/user', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建用户 POST /test-api/user */
export async function createAdminUser(body: API.CreateAdminUserDto, options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.AdminUserVo }>('/test-api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量删除用户 DELETE /test-api/user */
export async function deleteManyAdminUser(body: string[], options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.Boolean }>('/test-api/user', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询用户 GET /test-api/user/${param0} */
export async function findAdminUserById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findAdminUserByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CommonRes & { data?: API.AdminUserVo }>(`/test-api/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新用户 PUT /test-api/user/${param0} */
export async function updateAdminUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateAdminUserParams,
  body: API.UpdateAdminUserDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CommonRes & { data?: API.Boolean }>(`/test-api/user/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户 DELETE /test-api/user/${param0} */
export async function deleteAdminUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteAdminUserParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CommonRes & { data?: API.Boolean }>(`/test-api/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 管理员登录 POST /test-api/user/login */
export async function loginAdminUser(body: API.LoginAdminDto, options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.String }>('/test-api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询当前登录用户信息 GET /test-api/user/profile */
export async function getCurrentAdminUserProfile(options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.AdminUserVo }>('/test-api/user/profile', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 管理员注册 POST /test-api/user/register */
export async function registerAdminUser(body: API.CreateAdminUserDto, options?: { [key: string]: any }) {
  return request<API.CommonRes & { data?: API.AdminUserVo }>('/test-api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
