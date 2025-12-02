# nest 后端服务

## 开发

1. nest g resource modules/product --no-spec 创建文件

## 数据库迁移

1. 创建数据库迁移文件

```bash
npm run migration:generate --name=InitSchema

npm run migration:generate --name=AddSoftDelete
```

2. 运行数据库迁移

```bash
npm run migration:run
```
