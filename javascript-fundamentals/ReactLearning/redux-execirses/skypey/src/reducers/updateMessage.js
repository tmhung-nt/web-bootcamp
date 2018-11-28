import { EDIT_MESSAGE } from "../constants/actions-types";

const initialState = {
    isEditting: false,
    messageId: null  // selected message from messages[activeUserId])
}

export default (state = initialState, action) => {
    switch(action.type){
        case EDIT_MESSAGE:
            return {
                isEditting: true,
                messageId: action.payload.messageId
            }
        default:
            return state;
    }
};