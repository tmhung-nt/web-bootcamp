import React from "react";
import "./Sidebar.css";
import User from '../containers/User';

const Sidebar = (props) => {
  return (
    <aside className="Sidebar">
      {props.contacts.map(contact => <User key={contact.userId} {...contact}/>)}
    </aside>
  );
};

export default Sidebar;