import React from 'react';
import { Link } from 'react-router-dom';

const TopicList = ({match}) => {
    return (
        <div>
            <h3>TopicList View</h3>
            <ul>
                <li>
                    <Link to={`${match.url}/react`}>React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/router`}>Router</Link>
                </li>
                <li>
                    <Link to={`${match.url}/from-medium`}>From Medium</Link>
                </li>
            </ul>
        </div>
        
    )
};

// const TopicList = () => {
//     return (
//         <div>
//             <h3>TopicList View</h3>
//             <ul>
//                 <li>
//                     <Link to="/topic/react">React</Link>
//                 </li>
//                 <li>
//                     <Link to="/topic/router">Router</Link>
//                 </li>
//                 <li>
//                     <Link to="/topic/from-medium">From Medium</Link>
//                 </li>
//             </ul>
//         </div>
        
//     )
// };

export default TopicList;