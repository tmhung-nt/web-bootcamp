import * as types from "../constants/action-types";
import axios from 'axios';

export const loadCourses = () => {
    return dispatch => {
        return axios.get(types.FETCH_COURSES_URL)
                    .then(response => dispatch(loadCoursesSuccess(response.data)))
                    .catch(error => console.log(error));
    }
}

const loadCoursesSuccess = courses => {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    }
}


const saveCourse = course => {
    return (dispatch, getState) => {
        // axios.put(types.FETCH_AUTHORS_URL + '/' + course.id)
        //     .then( savedCourse =>  dispatch(updateCourseSuccess(savedCourse.data)))
        //     .catch(error => { throw(error) } 
        // );

        axios.request({
            method: 'put',
            url: types.FETCH_AUTHORS_URL + '/' + course.id,
            data: course
        })
        .then(savedCourse =>  dispatch(updateCourseSuccess(savedCourse.data)) )
        .catch(error => { throw(error) });
    }
}

const updateCourseSuccess = savedCourse => {
    return {
        type: types.UPDATE_COURSE_SUCCESS,
        course: savedCourse
    }
}

// const loadCoursesErrors = (error) => {
//     return {
//         type: types.LOAD_COURSES_ERROR,
//         error
//     }
// }