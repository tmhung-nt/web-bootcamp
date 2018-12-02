import * as types from "../constants/action-types";
import initialState from "./initialState";

export default (state = initialState.courses, action) => {
    switch(action.type){
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}