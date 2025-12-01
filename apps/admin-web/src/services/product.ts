import { request } from '@umijs/max';
import type { CreateProductDto, IProduct } from '@/types';

// 定义接口地址，开发环境直接写 localhost:3000
const API_URL = 'http://localhost:3000';

// 1. 发送请求时，入参类型是 CreateProductDto
export async function createProduct(data: CreateProductDto) {
  return request(`${API_URL}/products`, {
    method: 'POST',
    data,
  });
}

// 2. 获取列表时，返回类型是 IProduct[]
export async function getProducts() {
  return request<IProduct[]>(`${API_URL}/products`, {
    method: 'GET',
  });
}
