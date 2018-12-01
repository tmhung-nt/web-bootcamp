import React from 'react';
import propTypes from 'prop-types';
import CourseRow from './CourseRow';

const CourseList = ({courses}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course, index) => <CourseRow key={index} course={course} />)}
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
    courses: propTypes.array.isRequired
};

export default CourseList;
