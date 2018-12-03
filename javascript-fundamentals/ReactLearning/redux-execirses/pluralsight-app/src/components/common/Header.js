import React from 'react';
import { NavLink } from 'react-router-dom'
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return (
      <nav>
        <NavLink exact to="/">Home</NavLink>
        {" | "}
        <NavLink to="/courses">Courses</NavLink>
        {" | "}
        <NavLink to="/about">About</NavLink>
        { loading &&  <LoadingDots interval={100} dots={20} />}
      </nav>
    );
  };
  
  export default Header; 