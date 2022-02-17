export type PromotionInputType = string | boolean

export interface PromotionInputInterface<T> {
    [key: string]: T    
}

export interface Promotion {
    id: string
    image: string
    isActive: boolean
    name: string
    location: string
    noExpiration: boolean
    startDate: string
    endDate: string
}
export interface PromotionState {
    promotions: Array<Promotion>
    loading: boolean
}

export const SET_PROMOTION_STATE = 'set_promotion_state'

export interface SetPromotionStateAction {
    type: typeof SET_PROMOTION_STATE
    payload: PromotionInputInterface<PromotionInputType>
}

export type PromotionAction = SetPromotionStateAction