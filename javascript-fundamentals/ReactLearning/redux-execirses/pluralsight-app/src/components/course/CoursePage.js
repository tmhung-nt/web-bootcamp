import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
class CoursesPage extends React.Component {

  showCourse = (course, index) => {
      return (         
              <div key={index} >{course.title}</div>        
      )
  }

  redirectToAddCoursePage = () => {
      this.props.history.push('/course')
  }
  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input  type="submit"
                value="Add Course"
                className="btn btn-primary"
                onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses} />
      </div>
    );
  }
}
// props validation
CoursesPage.propTypes = {
    actions: propTypes.object.isRequired,
    courses: propTypes.array.isRequired
}


// redux connect
const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses,
        authors: state.authors
    }
}

// manual mapping, wrap createCourse to props instead 
const matpDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, matpDispatchToProps)(CoursesPage);
