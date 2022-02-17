import {
    TeacherState,
    TeacherAction,
    SET_TEACHER_STATE, 
} from './types';

const INITIAL_STATE: TeacherState = {
    teachers: [],
    activeSlide: 1
}

const teacherReducer = (state = INITIAL_STATE, action: TeacherAction): TeacherState => {
    switch (action.type) {
        case SET_TEACHER_STATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default teacherReducer;