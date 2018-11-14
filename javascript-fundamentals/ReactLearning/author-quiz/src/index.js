import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn',
            'Life on the Mississippi',
            'Roughing It'
        ]
      },
      {
        name: 'Joseph Conrad',
        imageUrl: 'images/authors/josephconrad.png',
        imageSource: 'Wikimedia Commons',
        books: ['Heart of Darkness']
      },
      {
        name: 'J.K. Rowling',
        imageUrl: 'images/authors/jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Daniel Ogren',
        books: ['Harry Potter and the Sorcerers Stone']
      },
      {
        name: 'Stephen King',
        imageUrl: 'images/authors/stephenking.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: ['The Shining', 'IT']
      },
      {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities']
      },
      {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
      }
];

let state;
let askedQuiz = [];
let remainingQuiz = [...authors];

const getTurnData = (authors) => {
    const allBooks = authors.reduce( (acc, currentAuthor) => {
        return acc.concat(currentAuthor.books);        
    }, []);
    const fourRandomBook = shuffle(allBooks).slice(0, 4);
    const answer = sample(fourRandomBook);
    const authorToAsk = authors.find(author => author.books.some(title => title === answer));
    askedQuiz.push(authorToAsk);
    return {
        books: fourRandomBook,
        author: authorToAsk,
        highlight: ''
    }
}

state = getTurnData(authors);


const onAnswerSelected = (answer) => {
  const isCorrect = state.author.books.some(book => {
    console.log(`book: ${book} - answer: ${answer}`);
    return book === answer;
  });
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}

const toNextQuiz = () => {
  remainingQuiz = remainingQuiz.filter(author => {
    let isKept = true;
    for (let i=0; i< askedQuiz.length; i++){
      let name = askedQuiz[i].name;
      if (name === author.name){
        isKept = false;
        break;
      }
    }
    return isKept;
  });
  console.log(remainingQuiz);
  state = getTurnData(remainingQuiz);
  render();
}

const render = () => {
  // ReactDOM.render(<AuthorQuiz authors={authors}/>, document.getElementById('root'));
  ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} toNextQuiz={toNextQuiz}/>, document.getElementById('root'));
}

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
