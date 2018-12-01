import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
class CoursesPage extends React.Component {

  showCourse = (course, index) => {
      return (         
              <div key={index} >{course.title}</div>        
      )
  }


  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.showCourse)}
      </div>
    );
  }
}
// props validation
CoursesPage.propTypes = {
    createCourse: propTypes.func.isRequired,
    courses: propTypes.array.isRequired
}


// redux connect
const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    }
}

// manual mapping, wrap createCourse to props instead 
const matpDispatchToProps = (dispatch) => {
    return bindActionCreators(courseActions, dispatch);
}

export default connect(mapStateToProps, matpDispatchToProps)(CoursesPage);
