import React, { Component } from 'react';
import propTypes from 'prop-types'
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

class ManageCoursePage extends Component {
    state = {
        course: Object.assign({}, this.props.course),
        erorrs: {},
        saving: false
    }

    // componentDidUpdate will be called everytime the props is changed
    componentWillReceiveProps(nextProps) {
        console.log(`this.props.course`) || console.log(this.props.course);
        console.log(`nextProps.course`) || console.log(nextProps.course)
        // this.setState({couse: Object.assign({}, nextProps.course)})
        if (this.props.course.id !== nextProps.course.id) {
            // necessary to populate form when existing course is loaded directly
            this.setState({course: Object.assign({}, nextProps.course)})
        }
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
        e.preventDefault();
        this.setState({saving: true})
        this.props.actions.saveCourse(this.state.course)
            .then( () => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    redirect = () => {
        this.setState({saving: false});
        toastr.success("Course saved!")
        this.props.history.push('/courses');
    }

    render() {
        return (
            <CourseForm 
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.erorrs} 
                onChange={this.updateCourseState}
                onSave={this.saveCourseHandler}
                saving={this.state.saving}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: propTypes.object.isRequired,
    authors: propTypes.array.isRequired,
    actions: propTypes.object.isRequired
};

// Pull in the React Router context so router is available on this.context.router.
ManageCoursePage.contextTypes = {
    router: propTypes.object.isRequired
};

const getCourseById = (courses, id) => {
    const course = courses.filter(course => course.id === id);
    return course ? course[0] : null; //since filter returns an array, need to get the first index out
}


const mapStateToProps = (state, ownProps) => {
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
    let courseId = ownProps.match.params.id;
    course =  courseId && state.courses.length > 0 ? getCourseById(state.courses, courseId ) : course; // if there is no courseId --> user is going to create new course here

    const authorFormattedForDropDown = state.authors.map(author => {
        return {
            value: author.firstName,
            text: author.firstName
        }
    })
    return {
        course: course,
        authors: authorFormattedForDropDown
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(ManageCoursePage);