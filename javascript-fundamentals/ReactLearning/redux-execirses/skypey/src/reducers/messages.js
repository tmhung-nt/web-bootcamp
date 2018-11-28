import { getMessages } from '../static-data';
import { SEND_MESSAGE, UPDATE_MESSAGE } from '../constants/actions-types';

let allUserMsgs; 

export default (state = getMessages(10), action) => {
    switch (action.type) {
        case SEND_MESSAGE:
          const { message, userId } = action.payload;
          allUserMsgs = state[userId];
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
        case UPDATE_MESSAGE:
          const {activeUserId, messageId, typing} = action.payload;
          allUserMsgs = state[activeUserId];
          return {
            ...state,
            [activeUserId]: {
              ...allUserMsgs,
              [messageId]:{
                number: messageId,
                text: typing,
                is_user_msg: true
              }
            }
          }
        default:
          return state;    
    }
}