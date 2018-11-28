import React from "react";
import store from "../store";
import { setTypingValue, sendMessage, updateSelectedMessage } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ typingValue }) => {

  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };
  
  const state = store.getState();

  const handleSubmit = e => {
      e.preventDefault();
      const {typing, activeUserId, updateMessage } = state;
      if (!updateMessage.isEditting){
         store.dispatch(sendMessage(typing, activeUserId));
      } else {
        store.dispatch(updateSelectedMessage(typing, activeUserId, updateMessage.messageId));
      }
  }

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={typingValue}
        placeholder="write a message"
        />
      </form>
    );
  };
  
  export default MessageInput;