import { 
    TeacherAction, 
    TeacherInputInterface, 
    TeacherInputType,
    Teacher, 
    SET_TEACHER_STATE
} from './types';
import { AppThunk } from '..';
import axios, { AxiosResponse } from 'axios';
import errorHandler from '../../utils/errorHandler';
const API_URL = process.env.REACT_APP_API_URL as string;

export const setTeacherState = (newState: TeacherInputInterface<TeacherInputType>): TeacherAction => ({
    type: SET_TEACHER_STATE,
    payload: newState
})

export const getTeachers = (): AppThunk => async (dispatch) => {
    try {
        dispatch({
            type: SET_TEACHER_STATE,
            payload: { loading: true, dialog: false }
        })
        const teacherRes = await axios.get(`${API_URL}teacher`) as AxiosResponse<Array<Teacher>>;

        if (teacherRes.status === 200) {
            dispatch({
                type: SET_TEACHER_STATE,
                payload: { teachers: teacherRes.data }
            })
        }
    }
    catch (e) {
        errorHandler(e, dispatch);
    }
    finally {
        dispatch({
            type: SET_TEACHER_STATE,
            payload: { loading: false }
        })
    }
}