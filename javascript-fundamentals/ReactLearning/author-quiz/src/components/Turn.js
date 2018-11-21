import PropTypes from 'prop-types';
import React from 'react';
import Book from './Book';

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

export default Turn;