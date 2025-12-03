# 微信小程序 (Native) 开发核心上下文指南

## 1. 核心原则 (Critical Rules)

- **环境限制**: 严禁使用 `window`, `document`, `localStorage`, `cookie`。
- **全局对象**: 使用 `wx` 命名空间调用 API (如 `wx.request`, `wx.showToast`)。
- **路由管理**: 必须使用 `wx.navigateTo`, `wx.switchTab` 等 API，禁止使用 `history.push`。
- **单位**: 移动端适配优先使用 `rpx` (750rpx = 屏幕宽度)，而非 `px` 或 `rem`。

## 2. WXML 模板语法映射 (VS HTML)

AI 在生成视图层代码时，**必须**遵循以下标签映射：

| HTML (Web)            | WXML (MiniProgram)    | 备注                          |
| :-------------------- | :-------------------- | :---------------------------- |
| `<div>`, `<section>`  | `<view>`              | 最常用的容器                  |
| `<span>`              | `<text>`              | 只有 text 标签内支持长按选中  |
| `<img>`               | `<image>`             | 注意默认宽高为 300px \* 225px |
| `<a>`                 | `<navigator>`         | 用于页面跳转                  |
| `<input>`, `<button>` | `<input>`, `<button>` | 需注意原生组件层级问题        |

## 3. 指令与事件系统 (Directives & Events)

严禁使用 Vue/React 语法，必须使用原生 WXML 语法：

- **循环**: `<view wx:for="{{list}}" wx:key="id" wx:for-item="item">{{item.name}}</view>`
- **条件**: `<view wx:if="{{condition}}">...</view>` (配套 `wx:elif`, `wx:else`)
- **事件绑定**:
  - 点击: `bind:tap="handleTap"` (禁止使用 `onClick`, `@click`)
  - 输入: `bind:input="handleInput"`
  - 阻止冒泡: `catch:tap="handleTap"`
- **数据传参**: 使用 dataset，如 `data-id="{{item.id}}"`，在 JS 中通过 `e.currentTarget.dataset.id` 获取。

## 4. WXSS 样式差异

- **选择器限制**: 支持 class (`.box`), id (`#box`), 标签 (`view`)，伪类 (`::after`)。**不支持** 级联过深的选择器或 `*` 通配符。
- **资源引用**: 背景图片 `background-image` 必须使用 **HTTPS 网络图片** 或 **Base64**，不支持本地相对路径。

## 5. TypeScript 类型定义提示

```typescript
// 页面示例
Page({
  data: {
    userInfo: null as UserInfo | null,
  },
  // 必须遵循小程序的生命周期
  onLoad(options: Record<string, string>) {
    // 获取页面参数
  },
  onShow() {
    // 页面显示
  },
});

// 组件示例
Component({
  properties: {
    title: { type: String, value: '' },
  },
  methods: {
    handleTap() {
      // 触发自定义事件
      this.triggerEvent('myevent', { id: 123 });
    },
  },
});
```
