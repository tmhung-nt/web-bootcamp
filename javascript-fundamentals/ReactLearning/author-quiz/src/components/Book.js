import React from 'react';

const Book = ({title, onClick}) => {
    return (
      // <p className="answer" onClick={() => onClick(title)}>{title}</p>
      <p className="answer" onClick={onClick.bind(this, title)}>{title}</p>
    )  // equivalent to calling .bind() "onClick = onClick.bind(this, title)"
  }
  
export default Book;