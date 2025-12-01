import { request } from '../../utils/request';

Page({
  data: {
    loading: true,
  },

  async onLoad() {
    this.fetchProducts();
  },

  async fetchProducts() {},
});
