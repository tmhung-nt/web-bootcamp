import React from 'react';
// import logo from './logo.svg';
import './AuthorQuiz.css';
import './bootstrap.min.css';
import Hero from './Hero';
import Turn from './Turn';
import Continue from './Continue';
import Footer from './Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const AuthorQuiz = (props) => {
    console.log(props);
    // console.log(state);
    return (
      <div className="container-fluid">
        <Hero />
        {/* {props.authors.map(author => <Turn author={author}/>)} */}
        <Turn {...props}/>
        <Continue show={props.highlight === 'correct' ? '' : 'none'} toNextQuiz={props.toNextQuiz}/>
        <Footer />
      </div>
    );
}
export default AuthorQuiz;
