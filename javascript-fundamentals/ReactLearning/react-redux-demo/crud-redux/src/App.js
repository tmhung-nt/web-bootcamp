import React, { Component } from 'react';
import PostFrom from './PostForm';
import AllPost from './AllPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center">Post It</h2>
        </div>
          <PostFrom />
          <AllPost />

      </div>
    );
  }
}

export default App;
