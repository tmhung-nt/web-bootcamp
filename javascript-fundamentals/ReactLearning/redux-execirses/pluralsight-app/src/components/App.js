// This component handles the App template used on every page.
import React from 'react';
import Header from './common/Header';

// children comfrom react-router

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children  /* App's props.children is passed from the props of Provider Component */}  
        {/* we should include children here to pass it down to other components???*/}
        {/* explaination can be found here */}
        {/* https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891 */}
        {/* The React docs say that you can use props.children on components that represent ‘generic boxes’ and that ‘don’t know their children ahead of time’. */}
      </div>
    );
  }
}

// App.propTypes = {
//   history: PropTypes.object.isRequired,
//   location: PropTypes.object.isRequired,
//   match: PropTypes.object.isRequired
// };

export default App;