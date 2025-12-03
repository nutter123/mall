# 微信小程序应用文档

## 1. 应用概述

client-mp是基于微信小程序平台开发的电商应用，提供商品浏览、购物车、订单管理、用户中心等功能。应用采用TypeScript和TDesign组件库开发，具有良好的用户体验和性能。

## 2. 技术栈

| 技术                | 版本    | 用途         |
| ------------------- | ------- | ------------ |
| TypeScript          | ^4.5.0  | 开发语言     |
| 微信小程序框架      | -       | 应用框架     |
| tdesign-miniprogram | ^1.0.0  | UI组件库     |
| Sass                | ^1.45.0 | CSS预处理器  |
| eslint              | ^7.32.0 | 代码规范检查 |

## 3. 目录结构

```
client-mp/
├── miniprogram/           # 小程序主目录
│   ├── app.js            # 小程序入口文件
│   ├── app.json          # 小程序全局配置
│   ├── app.wxss          # 小程序全局样式
│   ├── app.ts            # 小程序入口TypeScript文件
│   ├── components/       # 自定义组件
│   ├── images/           # 图片资源
│   ├── pages/            # 页面文件
│   ├── services/         # API服务层
│   ├── utils/            # 工具函数
│   └── types/            # TypeScript类型定义
├── typings/              # 类型声明文件
├── package.json          # 项目依赖配置
├── tsconfig.json         # TypeScript配置
└── project.config.json   # 微信开发者工具配置
```

## 4. 核心功能

### 4.1 商品浏览

- 商品分类展示
- 商品列表页面
- 商品详情页面
- 商品搜索功能

### 4.2 购物车

- 添加商品到购物车
- 修改购物车商品数量
- 删除购物车商品
- 购物车结算功能

### 4.3 订单管理

- 创建订单
- 订单列表展示
- 订单详情查看
- 订单状态管理

### 4.4 用户中心

- 用户登录/注册
- 个人信息管理
- 收货地址管理
- 订单历史记录

## 5. 快速开始

### 5.1 环境要求

- 微信开发者工具 1.05.2204250 或更高版本
- Node.js 14.0.0 或更高版本
- npm 6.0.0 或更高版本

### 5.2 安装依赖

```bash
cd apps/client-mp
npm install
```

### 5.3 运行项目

1. 打开微信开发者工具
2. 导入client-mp项目
3. 点击"编译"按钮运行项目

### 5.4 构建项目

```bash
npm run build
```

## 6. 配置说明

### 6.1 全局配置 (app.json)

```json
{
  "pages": [
    "pages/index/index",
    "pages/product/list",
    "pages/product/detail",
    "pages/cart/index",
    "pages/order/list",
    "pages/order/detail",
    "pages/user/index"
  ],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "电商小程序",
    "navigationBarTextStyle": "black"
  },
  "tabBar": {
    "color": "#999",
    "selectedColor": "#1989fa",
    "backgroundColor": "#fff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/cart/index",
        "text": "购物车"
      },
      {
        "pagePath": "pages/user/index",
        "text": "我的"
      }
    ]
  },
  "sitemapLocation": "sitemap.json"
}
```

## 7. 开发指南

### 7.1 页面开发

```typescript
// pages/index/index.ts
Page({
  data: {
    // 页面数据
  },
  onLoad() {
    // 页面加载时执行
  },
  onShow() {
    // 页面显示时执行
  },
  // 自定义方法
});
```

### 7.2 组件开发

```typescript
// components/product-card/product-card.ts
Component({
  properties: {
    // 组件属性
  },
  data: {
    // 组件数据
  },
  methods: {
    // 组件方法
  },
});
```

### 7.3 API调用

```typescript
// services/product.ts
import { request } from '../utils/request';

export const getProductList = (params: any) => {
  return request({
    url: '/api/product/list',
    method: 'GET',
    data: params,
  });
};
```

## 8. 性能优化

1. **图片优化**: 使用微信小程序的图片压缩功能，合理设置图片尺寸
2. **页面预加载**: 对于频繁访问的页面，使用wx.preload()进行预加载
3. **数据缓存**: 对于不经常变化的数据，使用wx.setStorage()进行本地缓存
4. **组件复用**: 合理设计组件，提高组件复用率，减少代码冗余
5. **网络请求优化**: 减少网络请求次数，使用合并请求等方式优化

## 9. 测试与调试

### 9.1 本地调试

使用微信开发者工具进行本地调试：

1. 打开微信开发者工具
2. 导入项目
3. 点击"编译"按钮运行项目
4. 使用调试面板进行调试

### 9.2 真机调试

1. 在微信开发者工具中点击"真机调试"
2. 用手机微信扫描二维码
3. 在手机上进行操作，查看调试信息

## 10. 构建与发布

### 10.1 构建

```bash
npm run build
```

### 10.2 发布

1. 在微信开发者工具中点击"上传"按钮
2. 设置版本号和更新日志
3. 登录微信公众平台，在"版本管理"中提交审核
4. 审核通过后，发布上线

## 11. 常见问题

### 11.1 编译报错

- 检查TypeScript语法是否正确
- 检查依赖是否安装完整
- 检查微信开发者工具版本是否符合要求

### 11.2 页面空白

- 检查页面路径是否正确
- 检查网络请求是否成功
- 检查数据绑定是否正确

### 11.3 API调用失败

- 检查API地址是否正确
- 检查请求参数是否符合要求
- 检查网络连接是否正常

## 12. 开发规范

1. **代码风格**: 遵循ESLint和Prettier的代码风格规范
2. **命名约定**: 使用小驼峰命名法，组件名使用连字符命名
3. **注释规范**: 为关键代码添加详细的注释说明
4. **类型定义**: 使用TypeScript接口定义数据类型
5. **文件结构**: 按功能模块划分文件结构

## 13. 更新日志

### v1.0.0 (2023-01-01)

- 初始版本发布
- 实现商品浏览、购物车、订单管理、用户中心等核心功能

## 14. 联系方式

如有问题或建议，请联系开发团队：

- 邮箱: dev@example.com
- 微信: example_dev
- GitHub: https://github.com/example/mall-monorepo
