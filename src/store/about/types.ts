export type AboutInputType = string | number | boolean

export interface AboutInputInterface<T> {
    [key: string]: T    
}

export interface About {
    id: string;
    image: string;
    content: string;
}

export interface AboutState {
    about: Array<About>
    loading: boolean
}

export const SET_ABOUT_STATE = 'set_about_state'

export interface SetAboutStateAction {
    type: typeof SET_ABOUT_STATE
    payload: AboutInputInterface<AboutInputType>
}

export type AboutAction = SetAboutStateAction