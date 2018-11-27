import React from "react";
import store from '../store';
import Header from './Header';
import Chats from './Chats';
import './ChatWindow.css'
import { values } from 'lodash';
import MessageInput from "../containers/MessageInput";

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMessages = state.messages[activeUserId];
    const {typing}= state;
    return (
      <div className="ChatWindow">
          <Header {...activeUser} />
          <Chats activeMessages={values(activeMessages)}/>
          <MessageInput typingValue={typing}/>
      </div>
    );
};

export default ChatWindow;