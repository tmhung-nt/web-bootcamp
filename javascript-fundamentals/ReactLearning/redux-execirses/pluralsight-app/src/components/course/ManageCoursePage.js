import React, { Component } from 'react';
import propTypes from 'prop-types'
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends Component {
    state = {
        course: Object.assign({}, this.props.course),
        erorrs: {}
    }
    render() {
        return (
            <CourseForm 
                allAuthors={[]}
                course={this.state.course}
                errors={this.state.erorrs} 
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: propTypes.object.isRequired
};

function mapStateToProps(state) {
    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    }
    return {
        course: course
    };
}

export default connect(
    mapStateToProps,
)(ManageCoursePage);