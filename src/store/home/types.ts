export type HomeInputType = string | number | boolean

export interface HomeInputInterface<T> {
    [key: string]: T    
}

export interface HomeState {
    activeSlide: number;
    carouselModalOpen: boolean;
}

export const SET_HOME_STATE = 'set_home_state'

export interface SetHomeStateAction {
    type: typeof SET_HOME_STATE
    payload: HomeInputInterface<HomeInputType>
}

export type HomeAction = SetHomeStateAction