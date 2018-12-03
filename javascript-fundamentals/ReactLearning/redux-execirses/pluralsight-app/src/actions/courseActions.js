import * as types from "../constants/action-types";
import axios from 'axios';
import courseApi from '../services/api/mockCourseApi';

export const loadCourses = () => {
    return dispatch => {
        return axios.get(types.FETCH_COURSES_URL)
                    .then(response => dispatch(loadCoursesSuccess(response.data)))
                    .catch(error => console.log(error));
        // return courseApi.getAllCourses()
        //                 .then(response => dispatch(loadCoursesSuccess(response)))
        //                 .catch(error => console.log(error));
    }
}

const loadCoursesSuccess = courses => {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    }
}


export function createCourseSuccess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course};
}
  
  export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function saveCourse(course) {
    return function (dispatch, getState) {
      return courseApi.saveCourse(course).then(course => {
        course.id ? dispatch(updateCourseSuccess(course)) :
          dispatch(createCourseSuccess(course));
      }).catch(error => {
        throw(error);
      });
    };
  }

// *****************
// axios PUT/POST
// *****************


// const saveCourse = course => {
//     return (dispatch, getState) => {
//         // axios.put(types.FETCH_AUTHORS_URL + '/' + course.id)
//         //     .then( savedCourse =>  dispatch(updateCourseSuccess(savedCourse.data)))
//         //     .catch(error => { throw(error) } 
//         // );
//         let apiResposne;
//         if (course.id !== 0 ){
//             // update existing course
//             apiResposne = axios.request({
//                 method: 'put',
//                 url: types.FETCH_AUTHORS_URL + '/' + course.id,
//                 data: course
//             })
//         } else {
//             // add new course
//             apiResposne = axios.request({
//                 method: 'post',
//                 url: types.FETCH_AUTHORS_URL,
//                 data: course
//             })
//         }
        
//         apiResposne.then(savedCourse =>  dispatch(updateCourseSuccess(savedCourse.data)) )
//         .catch(error => { throw(error) });
//     }
// }

// const updateCourseSuccess = savedCourse => {
//     return {
//         type: types.UPDATE_COURSE_SUCCESS,
//         course: savedCourse
//     }
// }

// const loadCoursesErrors = (error) => {
//     return {
//         type: types.LOAD_COURSES_ERROR,
//         error
//     }
// }