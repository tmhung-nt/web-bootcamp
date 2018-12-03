import * as types from "../constants/action-types";
import initialState from "./initialState";

export default (state = initialState.courses, action) => {
    switch(action.type){
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];
        case types.UPDATE_COURSE_SUCCESS:
            // const index = state.findIndex( course => course.id === action.course.id);

            return [
                ...state.map(course => {return course.id === action.course.id  ? action.course : course})
                // Object.assign({}, action.course)
            ]
        default:
            return state;
    }
}