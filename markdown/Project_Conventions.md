# 项目约定

## 1. 代码规范

### 1.1 TypeScript 规范

- 使用 TypeScript 进行开发，严格遵守类型检查
- 接口定义使用 `interface`，类型别名使用 `type`
- 避免使用 `any` 类型，除非有充分理由
- 使用 `readonly` 关键字标记不可变属性

### 1.2 命名约定

- **文件命名**：使用小驼峰命名法，如 `userService.ts`
- **类命名**：使用大驼峰命名法，如 `UserController`
- **函数/方法命名**：使用小驼峰命名法，如 `getUserInfo()`
- **变量命名**：使用小驼峰命名法，如 `userName`
- **常量命名**：使用全大写字母，单词间用下划线分隔，如 `MAX_PAGE_SIZE`
- **接口命名**：使用大驼峰命名法，以 `I` 为前缀（可选），如 `IUser`

### 1.3 代码风格

- 使用 Prettier 进行代码格式化
- 缩进使用 2 个空格
- 行尾不添加分号
- 字符串使用单引号

## 2. 目录结构约定

### 2.1 根目录结构

```
mall-monorepo/
├── apps/              # 应用层
├── markdown/          # 项目文档
├── package.json       # 根配置
├── pnpm-workspace.yaml # pnpm 工作区配置
├── tsconfig.base.json # 全局 TypeScript 配置
└── turbo.json         # Turborepo 配置
```

### 2.2 应用层结构

每个应用（admin-web、server-api）都应该遵循相似的目录结构模式：

- `src/`：源代码目录
- `components/`：公共组件
- `pages/` 或 `modules/`：页面或业务模块
- `api/` 或 `services/`：API 接口层
- `utils/`：工具函数
- `types/`：类型定义
- `assets/`：静态资源

## 3. 技术栈约定

### 3.1 Admin Web (后台管理)

- React + TypeScript
- Ant Design Pro
- Umi
- Less / Tailwind CSS

### 3.2 Server API (后端服务)

- NestJS + TypeScript
- TypeORM
- MySQL / Redis

## 4. 接口约定

### 4.1 API 设计规范

- 使用 RESTful API 设计风格
- 接口路径使用小驼峰命名法，如 `/api/user/getUserInfo`
- HTTP 方法：
  - `GET`：获取资源
  - `POST`：创建资源
  - `PUT`：更新资源
  - `DELETE`：删除资源

### 4.2 接口返回格式

```typescript
interface ApiResponse<T = any> {
  code: number; // 状态码，200 表示成功
  message: string; // 提示信息
  data: T; // 返回数据
}
```

## 5. 开发流程约定

### 5.1 分支管理

- `main`：主分支，用于发布生产版本
- `dev`：开发分支，用于集成各个功能分支
- `feature/xxx`：功能分支，用于开发新功能
- `fix/xxx`：修复分支，用于修复 bug

### 5.2 提交规范

- 提交信息使用英文，格式：`type(scope): subject`
- `type`：
  - `feat`：新功能
  - `fix`：修复 bug
  - `docs`：文档更新
  - `style`：代码风格更新
  - `refactor`：代码重构
  - `test`：测试代码更新
  - `chore`：构建或依赖更新

## 6. 部署约定

### 6.1 环境配置

- 开发环境：`development`
- 测试环境：`testing`
- 生产环境：`production`

### 6.2 Docker 部署

- 使用 Docker Compose 管理服务
- 每个服务对应一个 Docker 容器
- 配置文件：`docker-compose.yml`

## 7. 其他约定

### 7.1 注释规范

- 使用 JSDoc 风格的注释
- 为公共接口、类、函数添加详细注释
- 复杂业务逻辑添加必要的注释说明

### 7.2 依赖管理

- 使用 pnpm 进行依赖管理
- 共享依赖在根目录的 `package.json` 中声明
- 应用特定依赖在各自应用的 `package.json` 中声明
