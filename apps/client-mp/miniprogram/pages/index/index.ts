import { request } from '../../utils/request';

// 定义接口返回的数据类型（如果你引用了 shared-types 会更爽，这里先手动写）
interface Product {
  id: string;
  title: string;
  mainImage: string;
  price: number; // 假设后端接口返回了最低价
}

Page({
  data: {
    productList: [] as Product[],
    loading: true,
  },

  async onLoad() {
    this.fetchProducts();
  },

  async fetchProducts() {
    try {
      // 调用 NestJS 接口
      const res = await request<Product[]>('/products');
      console.log('商品数据:', res);

      this.setData({
        productList: res,
        loading: false,
      });
    } catch (error) {
      console.error(error);
    }
  },
});
