import React from "react";
import store from '../store';
import Header from './Header';
import Chats from './Chats';
import { values } from 'lodash';

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const messages = state.messages;
    console.log('user messages:');
    console.log(values(messages));
    return (
      <div className="ChatWindow">
          <Header {...activeUser} />
          {values(messages).map(userConversation => <Chats userConversation={userConversation} />)}
      </div>
    );
};

export default ChatWindow;