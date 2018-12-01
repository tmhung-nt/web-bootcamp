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

// const loadCoursesErrors = (error) => {
//     return {
//         type: types.LOAD_COURSES_ERROR,
//         error
//     }
// }