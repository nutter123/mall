declare namespace API {
  type AddCartDto = {
    /** 商品 SKU ID */
    skuId: string;
    /** 购买数量 */
    count: number;
  };

  type AdminUser = {
    id: string;
    username: string;
    password: string;
    nickname: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  };

  type CartItem = {
    id: string;
    userId: string;
    skuId: string;
    count: number;
    user: User;
    sku: Sku;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  };

  type CreateProductDto = {
    title: string;
    description?: string;
    mainImage: string;
    images?: string[];
    skus: CreateSkuDto[];
  };

  type CreateSkuDto = {
    price: number;
    stock: number;
    attributes: Record<string, any>;
  };

  type Product = {
    id: string;
    title: string;
    description: string;
    mainImage: string;
    images: string[];
    status: number;
    skus: Sku[];
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  };

  type ProductControllerFindOneParams = {
    id: string;
  };

  type Sku = {
    id: string;
    price: number;
    stock: number;
    attributes: Record<string, any>;
    product: Product;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  };

  type User = {
    id: string;
    openid: string;
    nickname?: string;
    avatar?: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  };
}
