// This component handles the App template used on every page.
import React from 'react';
import Header from './common/Header';

// children comfrom react-router

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}  
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