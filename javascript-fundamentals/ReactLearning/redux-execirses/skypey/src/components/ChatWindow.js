import React from "react";
import store from '../store';
import Header from './Header';
import Chats from './Chats';
import './ChatWindow.css'
import { values } from 'lodash';

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMessages = state.messages[activeUserId];
    console.log('activeMessages');
    console.log(activeMessages);
    return (
      <div className="ChatWindow">
          <Header {...activeUser} />
          <Chats activeMessages={values(activeMessages)}/>
      </div>
    );
};

export default ChatWindow;