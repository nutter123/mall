export interface ISku {
    id: string;
    price: number;
    stock: number;
    attributes: Record<string, string>;
}
export interface IProduct {
    id: string;
    title: string;
    description?: string;
    mainImage: string;
    images: string[];
    skus: ISku[];
    createdAt: Date;
}
