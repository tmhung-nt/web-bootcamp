import React from 'react';
import { Link } from 'react-router-dom';

const Hero = (props) => {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
        <button>
            <Link to="/addAuthor">Add New Author</Link>
        </button>
      </div>
    </div>
  )
}

export default Hero;