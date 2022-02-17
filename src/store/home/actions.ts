import { 
    HomeAction, 
    HomeInputInterface, 
    HomeInputType, 
    SET_HOME_STATE
} from './types';

export const setHomeState = (newState: HomeInputInterface<HomeInputType>): HomeAction => ({
    type: SET_HOME_STATE,
    payload: newState
})

