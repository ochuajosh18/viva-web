import { AlertColor } from '@mui/material/Alert'
import { AnyAction } from 'redux'

export type SystemInputType = string | number | boolean

export interface SystemInputInterface<T> {
    [key: string]: T    
}

export interface User {
    firstName: string;
    lastName: string;
    id: string;
    access: string;
}

export interface Session {
    accessToken: string;
    refreshToken?: string;
    user: User;
}

export interface SystemState {
    session?: Session;
    snackbarOpen: boolean;
    snackbarMessage: string;
    snackbarType: AlertColor;
    redirectTo: string;
    interceptors: {
        requestId: number;
        responseId: number;
    }
    openDrawer: boolean;
    activeRoute: string;
}

export const SET_SYSTEM_STATE = 'set_system_state'

export interface SetSystemStateAction {
    type: typeof SET_SYSTEM_STATE
    payload: SystemInputInterface<SystemInputType>
}

export type SystemAction = SetSystemStateAction | AnyAction