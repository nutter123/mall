import { request } from '@umijs/max';
export async function queryCurrentUser() {
  return request('/auth/admin/profile', {
    method: 'GET',
  });
}
