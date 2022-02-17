export type ProductInputType = string | boolean | object | null

export interface ProductInputInterface<T> {
    [key: string]: T    
}

export interface Product {
    category: string;
    categoryId: string;
    dateCreated: string;
    dateUpdated: string;
    id: string;
    image: string;
    isActive: boolean;
    name: string;
    description: string;
    price: number;
    subCategory: string;
    subCategoryId: string;
}

export interface ProductState {
    products: Array<Product>;
    loading: boolean;
}

export const SET_PRODUCT_STATE = 'set_product_state'

export interface SetProductStateAction {
    type: typeof SET_PRODUCT_STATE
    payload: ProductInputInterface<ProductInputType>
}

export type ProductAction = SetProductStateAction