import React from 'react';
import './User.css';
import store from '../store';
import { setActiveUserId } from '../actions';

const User = ({email, name, profile_pic, status, user_id}) => {
    return (
        <div className="User" onClick={handleUserClick.bind(null, user_id)}>
            <img src={profile_pic} alt={name} className="User__pic" />
            <div className="User__details">
                <p className="User__details-name">{name}</p>
                <p className="User__details-status">{status}</p>
            </div>
        </div>
    )
}

const handleUserClick = (userId) => {
    store.dispatch(setActiveUserId(userId));
}

export default User;