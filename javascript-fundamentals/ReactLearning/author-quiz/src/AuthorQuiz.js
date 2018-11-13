import React from 'react';
// import logo from './logo.svg';
import './AuthorQuiz.css';
import './bootstrap.min.css';

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

const Turn = (turnData) => {
  return (
    <div key={turnData.author.name} className="row turn" style={{backgroundColor: "white"}}>
      <div className="col-4 offset-1">
        <img src={turnData.author.imageUrl} className="authorImage" alt="Author"/>
      </div>
      <div className='col-6'>
        {turnData.books.map(title => <Book key={title} title={title}/>)}
      </div>
    </div>
  );
}

const Book = (book) => {
  return (
    <p className="answer">{book.title}</p>
  )
}

const Continue = (props) => {
  return (<div/>);
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
        <Continue />
        <Footer />
      </div>
    );

}

export default AuthorQuiz;
