export declare class CreateSkuDto {
    price: number;
    stock: number;
    attributes: Record<string, string>;
}
export declare class CreateProductDto {
    title: string;
    description?: string;
    mainImage: string;
    images?: string[];
    skus: CreateSkuDto[];
}
