import courseApi from '../api/mockCourseApi';
import * as types from "../constants/action-types";

export const loadCourses = () => {
    return dispatch => {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => console.log(error));
    }
}

export const loadCoursesSuccess = courses => {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    }
}

export const loadCoursesErros = (error) => {
    return {
        type: types.LOAD_COURSES_ERROR,
        error
    }
}