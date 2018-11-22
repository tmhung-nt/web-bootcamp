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
      <form onSubmit={this.handleSubmit} sytle={{margin: '20px'}}>
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
    <div className="col-12 col-sm-6 col-md-4 p-2"> 
       <div className="d-flex flex-column text-center border height100">
          <div>
            <img src={props.urls.small} style={{width: '500px'}}/>
          </div>
          <h3>{props.description}</h3>
          <button className="btn btn-outline-info btn-sm">
            <a href={props.urls.full}>Larger Image</a>
          </button>
       </div>
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
              // term: prevState.term, // no need to put previous value here, setState will keep it if not override
              photoList: resp.data.results
            }));
          });
  }

  changeSearchTermState = (term) => {
    this.setState((prevState) => ({
      term: term
      // ,photoList: prevState.photoList // no need to put previous value here, setState will keep it if not override
    }), this.getUnsplashPhotos);    
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container-fluid">
          <SearchBar term={this.state.term} onSubmitFunction={this.changeSearchTermState}/>
          <PhotoList pics={this.state.photoList}/>
        </div>
      </div>
    );
  }
}

export default App;
