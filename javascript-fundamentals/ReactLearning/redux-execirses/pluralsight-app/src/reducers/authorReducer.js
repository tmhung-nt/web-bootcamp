import * as types from "../constants/action-types";
import initialState from "./initialState";

export default (state = initialState.authors, action) => {
    switch(action.type){
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}