import React from 'react';
import './Main.css';
import Empty from './Empty';
import ChatWindow from './ChatWindow';

const Main = ({ user, activeUserId }) => {
    return <main className="Main">
        { !activeUserId 
          ? <Empty user={user} activeUserId={activeUserId} /> 
          : <ChatWindow activeUserId={activeUserId } /> }
    </main>;
  };
  
  export default Main;