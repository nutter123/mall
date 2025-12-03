# 微信小程序组件文档

## 1. 组件概述

client-mp应用的自定义组件位于`miniprogram/components/`目录下，用于构建小程序的UI界面。组件采用微信小程序的组件化开发方式，使用TypeScript编写，结合TDesign组件库提供丰富的UI组件。

## 2. 组件结构

```
miniprogram/components/
├── product-card/      # 商品卡片组件
│   ├── product-card.js
│   ├── product-card.json
│   ├── product-card.wxml
│   ├── product-card.wxss
│   └── product-card.ts
├── cart-item/         # 购物车商品项组件
├── order-item/        # 订单项组件
├── address-item/      # 地址项组件
└── loading/           # 加载动画组件
```

## 3. 核心组件

### 3.1 商品卡片组件 (product-card)

**路径**: `miniprogram/components/product-card/`

**功能**: 用于展示商品信息的卡片组件，包括商品图片、名称、价格、销量等信息。

**属性列表**:

| 属性名        | 类型     | 默认值 | 必填 | 描述         |
| ------------- | -------- | ------ | ---- | ------------ |
| productId     | string   | -      | 是   | 商品ID       |
| productName   | string   | -      | 是   | 商品名称     |
| price         | number   | 0      | 是   | 商品价格     |
| originalPrice | number   | 0      | 否   | 商品原价     |
| image         | string   | -      | 是   | 商品图片URL  |
| sales         | number   | 0      | 否   | 商品销量     |
| onTap         | function | -      | 否   | 卡片点击事件 |

**使用示例**:

```html
<!-- pages/product/list.wxml -->
<view class="product-list">
  <product-card
    wx:for="{{productList}}"
    wx:key="productId"
    productId="{{item.productId}}"
    productName="{{item.productName}}"
    price="{{item.price}}"
    originalPrice="{{item.originalPrice}}"
    image="{{item.image}}"
    sales="{{item.sales}}"
    bind:tap="onProductTap"
  />
</view>
```

```typescript
// pages/product/list.ts
Page({
  data: {
    productList: [],
  },
  onProductTap(e: any) {
    const productId = e.detail.productId;
    wx.navigateTo({
      url: `/pages/product/detail?id=${productId}`,
    });
  },
});
```

### 3.2 购物车商品项组件 (cart-item)

**路径**: `miniprogram/components/cart-item/`

**功能**: 用于展示购物车中的商品信息，包括商品图片、名称、价格、数量等，支持修改数量和删除功能。

**属性列表**:

| 属性名   | 类型     | 默认值 | 必填 | 描述             |
| -------- | -------- | ------ | ---- | ---------------- |
| cartItem | object   | -      | 是   | 购物车商品项数据 |
| onUpdate | function | -      | 否   | 更新商品数量事件 |
| onDelete | function | -      | 否   | 删除商品事件     |

**使用示例**:

```html
<!-- pages/cart/index.wxml -->
<view class="cart-list">
  <cart-item
    wx:for="{{cartList}}"
    wx:key="productId"
    cartItem="{{item}}"
    bind:update="onUpdateCartItem"
    bind:delete="onDeleteCartItem"
  />
</view>
```

### 3.3 订单项组件 (order-item)

**路径**: `miniprogram/components/order-item/`

**功能**: 用于展示订单信息，包括订单号、商品列表、订单状态、总金额等。

**属性列表**:

| 属性名 | 类型     | 默认值 | 必填 | 描述         |
| ------ | -------- | ------ | ---- | ------------ |
| order  | object   | -      | 是   | 订单数据     |
| onTap  | function | -      | 否   | 订单点击事件 |

### 3.4 地址项组件 (address-item)

**路径**: `miniprogram/components/address-item/`

**功能**: 用于展示收货地址信息，包括收货人、电话、地址等。

**属性列表**:

| 属性名     | 类型     | 默认值 | 必填 | 描述         |
| ---------- | -------- | ------ | ---- | ------------ |
| address    | object   | -      | 是   | 地址数据     |
| isSelected | boolean  | false  | 否   | 是否选中     |
| onSelect   | function | -      | 否   | 选择地址事件 |
| onEdit     | function | -      | 否   | 编辑地址事件 |

### 3.5 加载动画组件 (loading)

**路径**: `miniprogram/components/loading/`

**功能**: 用于展示加载动画，支持文本提示。

**属性列表**:

| 属性名 | 类型   | 默认值      | 必填 | 描述         |
| ------ | ------ | ----------- | ---- | ------------ |
| text   | string | "加载中..." | 否   | 加载提示文本 |
| size   | string | "normal"    | 否   | 加载图标大小 |

**使用示例**:

```html
<!-- pages/product/list.wxml -->
<loading wx:if="{{loading}}" text="加载中..." />
<view wx:else class="product-list">
  <!-- 商品列表 -->
</view>
```

## 4. 组件开发规范

1. **组件命名**: 使用连字符命名法，如 `product-card`
2. **组件文件结构**: 每个组件包含 .json/.wxml/.wxss/.ts 四个文件
3. **组件属性**: 明确属性的类型、默认值、是否必填等信息
4. **组件事件**: 使用bind:xxx方式绑定组件事件
5. **样式隔离**: 组件样式默认使用隔离模式，避免样式冲突
6. **类型定义**: 使用TypeScript接口定义组件属性和数据类型
7. **注释规范**: 为组件的属性、方法、事件添加详细的注释

## 5. 组件使用建议

1. **组件复用**: 优先使用已有的组件，避免重复开发
2. **组件粒度**: 合理设计组件粒度，避免组件过大或过小
3. **性能优化**: 避免在组件中进行复杂的计算和频繁的数据更新
4. **错误处理**: 组件内部进行错误处理，确保组件的稳定性
5. **兼容性**: 考虑不同微信版本的兼容性问题

## 6. 组件维护

1. **组件更新**: 当业务需求发生变化时，及时更新组件功能
2. **组件测试**: 为组件编写单元测试，确保组件功能正常
3. **组件文档**: 为组件编写详细的文档，包括属性、事件、使用示例等
4. **组件版本**: 对组件进行版本管理，避免破坏性更新

## 7. TDesign组件库

client-mp应用使用TDesign组件库提供丰富的UI组件，包括按钮、表单、列表、弹窗等。组件库的使用方式请参考TDesign官方文档：https://tdesign.tencent.com/miniprogram/components/overview

## 8. 自定义组件开发流程

1. 在components目录下创建组件目录
2. 编写组件的.wxml、.wxss、.json、.js/.ts文件
3. 在需要使用组件的页面的.json文件中注册组件
4. 在页面的.wxml文件中使用组件
5. 编写组件的测试用例
6. 更新组件文档
