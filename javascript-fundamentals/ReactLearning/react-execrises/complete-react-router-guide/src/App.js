import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (params) => {
  console.log(params);
  return (
    <h1>Welcome User {params.username} </h1>
  )
}

class App extends Component {
  state = {
    isLoggedIn: false
  }

  loginHandle = () => {
    this.setState((prevStatus) => ({isLoggedIn: !prevStatus.isLoggedIn}))
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{color: 'green'}}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeStyle={{color: 'green'}}>About</NavLink>
            </li>
            <li>
              <NavLink to="/user/watarus" exact activeStyle={{color: 'green'}}>User Watarus</NavLink>
            </li>
            <li>
              <NavLink to="/user/hung" exact activeStyle={{color: 'green'}}>User Hung</NavLink>
            </li>
            <li>
              <Prompt 
                when={!this.state.isLoggedIn}
                message={(location)=>{
                  return location.pathname.startsWith('/user') ? 'Are you sure?' : true
                }}
              />
            </li>
          </ul>

          <input type="button" value={this.state.isLoggedIn ? 'log out' : 'log in'} onClick={this.loginHandle}/>

          <Route exact path='/' render={
            () => {
              return (
                <h1>Welcome Home!</h1>
              )
            }
          } />
          <Route strict path='/about' render={   //if url is '/about'  -> unknown route
             () => // {
              // return 
              (
                <h1>Welcome About!</h1>
              )
            // }
          } />
          <Route strict path='/user/:username' render={
            ({match}) => (
              this.state.isLoggedIn ? <User username={match.params.username}/> : <Redirect to="/"/>
            )
          } />
        </div>
      </Router>
    );
  }
}

export default App;
