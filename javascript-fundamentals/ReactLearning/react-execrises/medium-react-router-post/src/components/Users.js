import React from 'react';
// import { Link } from 'react-router-dom';

const Users = (props) => {
    const {match} = props;
    console.log(props);
    const imageUrl = "https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/46140016_1612941822184773_3725887582433705984_n.jpg?_nc_cat=102&_nc_ht=scontent.fsgn5-4.fna&oh=a5d7f3a881b22b507cdbe8734386f339&oe=5C89D8F1";
    let isDislay = match.params.username !== "hung" ? 'none' : '';
    return (
        <div>
            <h3>User {match.params.username}</h3>
            <img 
                src= {imageUrl}
                style={{display: isDislay}}
                alt = {match.params.username}
            />
        </div>
    )
}

export default Users;