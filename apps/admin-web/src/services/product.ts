import { request } from '@umijs/max';

// 定义接口地址，开发环境直接写 localhost:3000
const API_URL = 'http://localhost:3000';

export async function createProduct(data: any) {
  return request(`${API_URL}/products`, {
    method: 'POST',
    data,
  });
}
