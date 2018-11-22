import React from 'react';
import { Link } from 'react-router-dom';

const TopicDetails = ({match}) => {
    console.log(match);
    return (
        <div>
            <h3>TopicList - {urlToString(match.params.topicId)} </h3>
            <Link to="/topic" >Back To TopicList</Link>
        </div>
        
    )
};

const urlToString = (url) => {
    return url.split('-').join(' ').toString();
}

export default TopicDetails;