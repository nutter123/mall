// 定义后端返回的 SKU 结构
interface Sku {
  id: string;
  price: number;
  stock: number;
  attributes: Record<string, string>; // { "颜色": "红", "尺码": "L" }
}

// 定义我们要生成的渲染结构
export interface SpecItem {
  key: string; // "颜色"
  values: string[]; // ["红", "蓝"]
}

/**
 * 核心算法：从 SKU 列表中提取规格选项
 */
export function extractSpecs(skus: Sku[]): SpecItem[] {
  const specMap = new Map<string, Set<string>>();

  skus.forEach((sku) => {
    // 遍历每一个 SKU 的属性
    Object.entries(sku.attributes).forEach(([key, value]) => {
      if (!specMap.has(key)) {
        specMap.set(key, new Set());
      }
      // 使用 Set 自动去重
      specMap.get(key)!.add(value);
    });
  });

  // 转换为数组返回
  const result: SpecItem[] = [];
  specMap.forEach((valueSet, key) => {
    result.push({
      key,
      values: Array.from(valueSet),
    });
  });

  return result;
}
