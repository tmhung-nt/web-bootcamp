// This component handles the App template used on every page.
import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './common/Header';
import { withRouter } from 'react-router-dom';

// children comfrom react-router

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} />
        {this.props.children  /* App's props.children is passed from the props of Provider Component */}  
        {/* we should include children here to pass it down to other components???*/}
        {/* explaination can be found here */}
        {/* https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891 */}
        {/* The React docs say that you can use props.children on components that represent ‘generic boxes’ and that ‘don’t know their children ahead of time’. */}
      </div>
    );
  }
}

App.propTypes = {
  location: propTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ajaxCallsInProgress > 0
  }
}

export default withRouter(connect(mapStateToProps)(App)); // need to wrap connected component by withRouter in order to navigate by clicking on Nav Links 
// https://reacttraining.com/react-router/web/guides/redux-integration