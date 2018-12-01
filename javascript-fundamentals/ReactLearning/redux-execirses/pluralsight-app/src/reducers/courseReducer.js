import * as types from "../constants/action-types";

export default (state = [], action) => {
    switch(action.type){
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}