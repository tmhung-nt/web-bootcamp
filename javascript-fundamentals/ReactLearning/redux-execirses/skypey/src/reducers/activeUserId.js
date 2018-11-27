import { SET_ACTIVE_USER_ID } from '../constants/actions-types';

export default (state = null, action) => {
    switch(action.type){
        case SET_ACTIVE_USER_ID:
            return action.payload;  //payload is userId
        default:
            return state;
    }
};
