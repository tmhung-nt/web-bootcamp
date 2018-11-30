import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
class CoursesPage extends React.Component {
  state = {
      course: {
          title: ''
      }
  }

  onTitleChange = e => {
      const course = this.state.course;
      course.title = e.target.value;
    this.setState({ course });
  }

  onClickSave = () => {
      this.props.createCourse(this.state.course);
      this.setState({course: {
          title: ''
      }});
  }

  showCourse = (course, index) => {
      return (
         
              <p key={index} >{course.title}</p>
         
      )
  }


  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        {/* <div>
            {this.props.courses.map((course, id) => <p key={id}>{course.title}</p>)}
        </div> */}
        <div>

            {this.props.courses.map(this.showCourse)}
        </div>
        <input 
            type="text"
            onChange={this.onTitleChange} 
            name="title"
            value={this.state.course.title}
            placeholder="Course's title goes here"
        />
        <input 
            type="submit"
            value="Save"
            onClick={this.onClickSave}
        />
      </div>
    );
  }
}

CoursesPage.propTypes = {
    createCourse: propTypes.func.isRequired,
    courses: propTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses
    }
}


const matpDispatchToProps = (dispatch) => {
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    }
}

export default connect(mapStateToProps, matpDispatchToProps)(CoursesPage);
