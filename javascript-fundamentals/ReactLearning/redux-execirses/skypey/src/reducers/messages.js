import { getMessages } from '../static-data';
import { SEND_MESSAGE } from '../constants/actions-types';

export default (state = getMessages(10), action) => {
    switch (action.type) {
        case SEND_MESSAGE:
          const { message, userId } = action.payload;
          const allUserMsgs = state[userId];
        //   const number = +_.keys(allUserMsgs).pop() + 1;  // + here is to make sure that the result is converted into Number instead of String
          const number = + Object.keys(allUserMsgs).pop() + 1;  // + here is to make sure that the result is converted into Number instead of String
    
          return {
            ...state,
            [userId]: {
              ...allUserMsgs,
              [number]: {
                number,
                text: message,
                is_user_msg: true
              }
            }
          };
    
        default:
          return state;    
    }
}