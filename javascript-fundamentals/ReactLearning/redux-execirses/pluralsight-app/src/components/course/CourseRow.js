import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { convertSecondsToMinutes } from '../../services/utils';

const Course = ({course, index}) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td><a href={course.watchHref} target="blank">Watch</a></td>
            <td><Link to={`/course/` + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{convertSecondsToMinutes(course.length)}</td>
        </tr>
    );
}

Course.propTypes = {
    course: propTypes.object.isRequired
};

export default Course;
