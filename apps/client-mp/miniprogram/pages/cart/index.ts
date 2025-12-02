import { request } from '../../utils/request';
import { AuthService } from '../../api/auth';

Page({
  data: {
    cartList: [],
    isEmpty: false,
    totalAmount: 0,
    isAllSelected: false,
  },

  onShow() {
    this.getTabBar().init(); // 如果用了 TDesign 自定义 TabBar 需要这行，原生不需要
    this.fetchCartData();
  },

  async fetchCartData() {
    // 检查登录
    if (!AuthService.checkLogin()) {
      this.setData({ isEmpty: true });
      return;
    }

    try {
      const res = await request<any[]>('/cart');

      if (res.length === 0) {
        this.setData({ isEmpty: true, cartList: [] });
        return;
      }

      // 给每个商品加一个前端状态 selected
      const list = res.map((item) => ({ ...item, selected: false }));
      this.setData({ cartList: list, isEmpty: false });
      this.calcTotal();
    } catch (err) {
      console.error(err);
    }
  },

  // 选中/取消选中
  onSelect(e: any) {
    const { index } = e.currentTarget.dataset;
    const key = `cartList[${index}].selected`;
    this.setData({ [key]: !this.data.cartList[index].selected });
    this.calcTotal();
  },

  // 计算总价
  calcTotal() {
    let total = 0;
    this.data.cartList.forEach((item: any) => {
      if (item.selected) {
        total += Number(item.sku.price) * item.count;
      }
    });
    // 转成分，因为 TDesign 价格组件通常单位是分，或者我们直接显示元
    this.setData({ totalAmount: total * 100 });
  },

  onCheckout() {
    wx.showToast({ title: '去结算逻辑待开发', icon: 'none' });
  },
});
