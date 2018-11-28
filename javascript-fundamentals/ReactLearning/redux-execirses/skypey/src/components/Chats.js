import React, { Component } from "react";
import "./Chats.css";
import store from "../store";
import { editMessage } from "../actions";

const Chat = ({ message }) => {
  const { text, is_user_msg, number: msgId  } = message;
  const activeUserId = store.getState().activeUserId;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`} onDoubleClick={handleEditMsg.bind(null, { activeUserId, msgId, text, is_user_msg})}>{text}</span>
  );
};

const handleEditMsg = ({activeUserId, msgId, text, is_user_msg}) => {
  if (is_user_msg){
    store.dispatch(editMessage(activeUserId, msgId, text));
  }
}


class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.activeMessages.map(message => (
          <Chat message={message} activeUserid={this.props.activeUserid} key={message.number} />
          ))}
      </div>
    );
  }
}
    
export default Chats;
