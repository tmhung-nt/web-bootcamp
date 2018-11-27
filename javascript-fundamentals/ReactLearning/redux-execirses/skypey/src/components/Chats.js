import React from "react";
import { values } from 'lodash';

const Chats = ({userConversation}) => {
  console.log('receiving in Chats');
  console.log(userConversation);

  return (
    <div>
      { values(userConversation)
        .map(message => message.is_user_msg ? <p style={{textAlign: 'right'}}>{message.text}</p>
                                    : <p style={{textAlign: 'left'}}>{message.text}</p>)
        
      }
    </div>
  )
}

export default Chats;