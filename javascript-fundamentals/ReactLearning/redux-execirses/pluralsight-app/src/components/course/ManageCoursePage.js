import React, { Component } from 'react';
import propTypes from 'prop-types'
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { bindActionCreators } from 'C:/Users/Hung Tran Manh/AppData/Local/Microsoft/TypeScript/3.1/node_modules/redux';

class ManageCoursePage extends Component {
    state = {
        course: Object.assign({}, this.props.course),
        erorrs: {}
    }

    updateCourseState = (e) =>{
        const field = e.target.name;
        let course = this.state.course;
        course[field] = e.target.value;
        return this.setState({
            course: course
        })
    }

    saveCourseHandler = e => {
        e. preventDefault();
        this.props.saveCourse(this.state.course);
    }
    render() {
        return (
            <CourseForm 
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.erorrs} 
                onChange={this.updateCourseState}
                onSave
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: propTypes.object.isRequired,
    authors: propTypes.array.isRequired
};

function mapStateToProps(state) {
    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };

    const authorFormattedForDropDown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        }
    })
    return {
        course: course,
        authors: authorFormattedForDropDown
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(courseActions, dispatch);
}

export default connect(
    mapStateToProps,
)(ManageCoursePage);