import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <h2>NAVBAR</h2>
            <ul>
                <li>
                    <NavLink to="/home" activeStyle={{color: 'green'}}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeStyle={{color: 'green'}}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/topic" activeStyle={{color: 'green'}}>Topic</NavLink>
                </li>
            </ul>
        </div>
    )
};

export default NavBar;