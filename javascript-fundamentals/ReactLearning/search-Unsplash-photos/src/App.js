import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_KEY="fb655ca4331ab9d7f1676b3ce532d4624393dc8f1858fd5c4c7000593342fb7d"; // takes from https://unsplash.com/oauth/applications/41774

class SearchBar extends Component {
  state = {termToSearch: ''};

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitFunction(this.state.termToSearch);
    this.setState({termToSearch: ''});
  };

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input size="30" type="text" 
          onChange={(event) => this.setState({termToSearch: event.target.value})}
          value={this.state.termToSearch}
          placeholder="Search for images from Unsplash">
          </input>
        <button style={{display: 'inline-block', leftMargin: '5px'}}>Search For Images</button>
      </form>
    )
  }
}

const PhotoList = (props) => {
  return (
    // <div style={{margin: '15px'}}>
    //   {props.pics.map((pic) => <PhotoItem {...pic}/>)}
    // </div>
    
      <div className="row">
      {props.pics.map((pic) => <PhotoItem {...pic}/>)}
      </div>
  )
}

const PhotoItem = (props) => {
  return (
    <div className="col-md-3 col-sm-6" > 
      <img src={props.urls.small} />
    </div>
  )
}

class App extends Component {
  state = {
    term: '',
    photoList: []
  }

  componentDidMount(){
    this.getUnsplashPhotos(this.state.term);
  }

  getUnsplashPhotos = () => {
    const term = this.state.term === '' ? 'office' : this.state.term;
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${API_KEY}`)
        //  .then(resp => resp.json())
         .then(resp => {
           console.log(resp.data.results);
           this.setState((prevState)  => ({
              term: prevState.term,
              photoList: resp.data.results
            }));
          });
  }

  changeSearchTermState = (term) => {
    this.setState((prevState) => ({
      term: term,
      photoList: prevState.photoList
    }), this.getUnsplashPhotos);    
  }

  render() {
    return (
      <div className="container-fluid">
        <SearchBar term={this.state.term} onSubmitFunction={this.changeSearchTermState}/>
        <PhotoList pics={this.state.photoList}/>
      </div>
    );
  }
}

export default App;
