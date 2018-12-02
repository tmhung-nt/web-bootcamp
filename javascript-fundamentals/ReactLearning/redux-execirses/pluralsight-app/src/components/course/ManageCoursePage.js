import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends Component {
    render() {
        return (
            <div>
                <h1>Manage Course</h1>
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    //myProp: Property
};

function mapStateToProps(state) {
    return {

    };
}

export default connect(
    mapStateToProps,
)(ManageCoursePage);