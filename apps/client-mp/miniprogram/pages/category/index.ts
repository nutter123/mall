Page({
  data: {
    sidebarIndex: 0,
    categories: [
      { label: '手机数码', title: '热门手机' },
      { label: '电脑办公', title: '生产力工具' },
      { label: '家用电器', title: '智能生活' },
      { label: '潮流服饰', title: '换季穿搭' },
    ],
    // 模拟商品图
    mockImg: 'https://tdesign.gtimg.com/miniprogram/images/example2.png',
  },

  onSideBarChange(e: any) {
    this.setData({ sidebarIndex: e.detail.value });
  },
});
