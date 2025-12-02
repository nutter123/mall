import { request } from '../utils/request';

export const addToCart = (data: { skuId: string; count: number }) => {
  return request('/cart', {
    method: 'POST',
    data,
  });
};
