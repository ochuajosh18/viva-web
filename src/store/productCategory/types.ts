export type ProductCategoryInputType = string | boolean | object | null

export interface ProductCategoryInputInterface<T> {
    [key: string]: T    
}

export interface ProductCategory {
    id: string;
    name: string;
    image: string;
    dateCreated: string;
    dateUpdated: string;
    isDeleted: boolean;
}

export interface ProductCategoryState {
    productCategories: Array<ProductCategory>;
    productCategoryLoading: boolean;
}

export const SET_PRODUCT_CATEGORY_STATE = 'set_product_category_state'

export interface SetProductCategoryStateAction {
    type: typeof SET_PRODUCT_CATEGORY_STATE
    payload: ProductCategoryInputInterface<ProductCategoryInputType>
}

export type ProductCategoryAction = SetProductCategoryStateAction