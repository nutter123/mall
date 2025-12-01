import { request } from '../../utils/request';
import type { IProduct } from '@mall/types';

Page({
  data: {
    productList: [] as IProduct[],
    loading: true,
  },

  async onLoad() {
    this.fetchProducts();
  },

  async fetchProducts() {
    try {
      // 调用 NestJS 接口
      const res = await request<IProduct[]>('/products');
      console.log('商品数据:', res);

      this.setData({
        productList: res,
        loading: false,
      });
    } catch (error) {
      console.error(error);
    }
  },

  goToDetail(e: WechatMiniprogram.TouchEvent) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/goods/details/index?id=${id}`,
    });
  },
});
