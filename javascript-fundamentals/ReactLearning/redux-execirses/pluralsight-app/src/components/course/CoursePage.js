import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { createCourse } from '../../actions/courseActions';
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
      this.props.dispatch(createCourse(this.state.course));
      this.setState({course: {
          title: ''
      }});
  }


  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <div>
            {this.props.courses.map((course, id) => <p key={id}>{course.title}</p>)}
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

CoursesPage.PropTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        courses: state.courses
    }
}




export default connect(mapStateToProps)(CoursesPage);
