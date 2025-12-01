import { request } from '../../../utils/request';
import { extractSpecs, SpecItem } from '../../../utils/sku-helper';

interface ProductDetail {
  id: string;
  title: string;
  mainImage: string;
  images: string[];
  skus: any[];
}

Page({
  data: {
    goodsId: '',
    detail: null as ProductDetail | null,
    skuVisible: false, // 弹窗是否显示
    specList: [] as SpecItem[], // 渲染用的规格列表
    selectedSpecs: {} as Record<string, string>, // 当前选中的规格 { "颜色": "红" }
    currentSku: null as any, // 最终匹配到的那个 SKU
    displayPrice: '0.00', // 显示的价格
  },

  onLoad(options: { id: string }) {
    if (options.id) {
      this.fetchDetail(options.id);
    }
  },

  async fetchDetail(id: string) {
    try {
      const res = await request<ProductDetail>(`/products/${id}`);

      // 1. 计算规格列表
      const specList = extractSpecs(res.skus);

      // 2. 初始化价格（取最低价或第一个 SKU 的价格）
      const initialPrice = res.skus.length > 0 ? res.skus[0].price : '0.00';

      this.setData({
        detail: res,
        specList,
        displayPrice: initialPrice,
      });
    } catch (error) {
      console.error(error);
    }
  },

  // 打开/关闭弹窗
  toggleSkuPopup() {
    this.setData({ skuVisible: !this.data.skuVisible });
  },

  // 核心交互：点击规格按钮
  handleSelectSpec(e: WechatMiniprogram.TouchEvent) {
    const { key, value } = e.currentTarget.dataset;
    const { selectedSpecs, detail } = this.data;

    // 1. 更新选中状态 (如果点击已选中的，则取消选中)
    if (selectedSpecs[key] === value) {
      delete selectedSpecs[key];
    } else {
      selectedSpecs[key] = value;
    }

    this.setData({ selectedSpecs });

    // 2. 尝试查找匹配的 SKU
    this.checkSkuMatch(selectedSpecs, detail!.skus);
  },

  // 检查当前选中的规格组合，是否能确定一个唯一的 SKU
  checkSkuMatch(selected: Record<string, string>, skus: any[]) {
    // 简单的全匹配逻辑
    const matchedSku = skus.find((sku) => {
      // 检查 SKU 的所有属性是否都包含在当前选中项里
      return Object.entries(sku.attributes).every(([k, v]) => selected[k] === v);
    });

    // 只有当用户把所有规格都选齐了（比如既选了颜色又选了尺码），matchedSku 才会有值
    // 但上面的逻辑有漏洞，这里为了 MVP 简化：
    // 我们假设规格数量必须完全一致才算选中
    const isFullSelected = Object.keys(selected).length === this.data.specList.length;

    if (matchedSku && isFullSelected) {
      this.setData({
        currentSku: matchedSku,
        displayPrice: matchedSku.price, // 更新价格为 SKU 真实价格
      });
    } else {
      this.setData({ currentSku: null });
    }
  },

  // 点击确认/购买
  handleAddCart() {
    if (!this.data.currentSku) {
      wx.showToast({ title: '请选择完整规格', icon: 'none' });
      return;
    }
    wx.showToast({ title: `加入 SKU: ${this.data.currentSku.id}`, icon: 'success' });
    this.toggleSkuPopup();
  },
});
