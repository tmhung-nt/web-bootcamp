import React from 'react';
// import logo from './logo.svg';
import './AuthorQuiz.css';
import './bootstrap.min.css';
import PropTypes from 'prop-types';

const Hero = (props) => {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  )
}

const Turn = ({author, books, highlight, onAnswerSelected}) => {
  const highlightToBgColor = (highlight) => {
    const mapping = {
      none: '',
      correct: 'green',
      wrong: 'red'
    }
    return mapping[highlight];
  }

  return (
    <div key={author.name} className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorImage" alt="Author"/>
      </div>
      <div className='col-6'>
        {books.map(title => <Book key={title} title={title} onClick={onAnswerSelected}/>)}
      </div>
    </div>
  );
}

Turn.prototype = {
  author: PropTypes.shape(
    {name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired}
  ),
  books: PropTypes.array.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.oneOf(['', 'correct', 'wrong']).isRequired
}

const Book = ({title, onClick}) => {
  return (
    // <p className="answer" onClick={() => onClick(title)}>{title}</p>
    <p className="answer" onClick={onClick.bind(this, title)}>{title}</p>
  )  // equivalent to calling .bind() "onClick = onClick.bind(this, title)"
}

const Continue = (props) => {
  return (
    <button className="btn btn-primary" style={{marginLeft: '85%'}} onClick={props.toNextQuiz}>Next</button>
  );
}

const Footer = (props) => {
  return (
    <div id="footer" className="row offset-1">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from <a href="http://commons.wikimedia.org/wiki/">Wikimedia</a>
        </p>
      </div>
    </div>
  );
}

const AuthorQuiz = (turnData) => {
    return (
      <div className="container-fluid">
        <Hero />
        {/* {props.authors.map(author => <Turn author={author}/>)} */}
        <Turn {...turnData}/>
        <Continue toNextQuiz={turnData.toNextQuiz}/>
        <Footer />
      </div>
    );

}

export default AuthorQuiz;
