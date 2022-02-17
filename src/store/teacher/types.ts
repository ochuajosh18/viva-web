export type TeacherInputType = string | number | boolean | Teacher | Array<Teacher>;

export interface TeacherInputInterface<T> {
    [key: string]: T;
}

export interface Teacher {
    id: string;
    name: string;
    experience: string;
    position: string;
    typeId: string; // contains music and dance
    categoryId: string; // sub of music/dance
    categoryName: string;
    image: string;
}

export interface TeacherState {
    teachers: Array<Teacher>;
    activeSlide: number;
}

export const SET_TEACHER_STATE = 'set_teacher_state';

export interface SetTeacherStateAction {
    type: typeof SET_TEACHER_STATE;
    payload: TeacherInputInterface<TeacherInputType>;
}

export type TeacherAction = SetTeacherStateAction;