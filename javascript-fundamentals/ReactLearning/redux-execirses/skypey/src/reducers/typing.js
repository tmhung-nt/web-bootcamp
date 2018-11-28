import { SET_TYPING_VALUE, SEND_MESSAGE, EDIT_MESSAGE, UPDATE_MESSAGE } from "../constants/actions-types";

export default function typing(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MESSAGE:
    case UPDATE_MESSAGE:
      return "";
    case EDIT_MESSAGE:
      return action.payload.text;
    
    default:
      return state;
  }
}
