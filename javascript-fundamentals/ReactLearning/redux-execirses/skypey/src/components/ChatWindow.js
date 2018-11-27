import React from "react";
import store from '../store';
import Header from './Header';

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    console.log("chatWindow");
    console.log(state);
    console.log(activeUserId);
    console.log(activeUser);
  return (
    <div className="ChatWindow">
        <Header {...activeUser} />
    </div>
  );
};

export default ChatWindow;