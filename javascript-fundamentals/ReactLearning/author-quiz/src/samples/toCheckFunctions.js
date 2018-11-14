const {_} = require('underscore');

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
    const fourRandomBook = _.shuffle(allBooks).slice(0, 4);
    const answer = _.sample(fourRandomBook);
    const authorToAsk = authors.find(author => author.books.some(title => title === answer));
    askedQuiz.push(authorToAsk);
    return {
        books: fourRandomBook,
        author: authorToAsk,
        highlight: ''
    }
}

const toNextQuiz = () => {
  console.log("------------- toNextQuiz --------------");

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
  console.log(remainingQuiz.length);
  state = getTurnData(remainingQuiz);
  // render();
}



state = getTurnData(remainingQuiz);
toNextQuiz();
toNextQuiz();
toNextQuiz();

// let arr1 = [1, 2, 3, 4, 6];
// let arr2 = [2, 6];
// let arr3 = [1, 3, 4];

// const getSubArr = (arr1, arr2) => {
//   return arr1.filter(element => {
//     for (let i=0; i< arr2.length; i++){
//       if (arr2[i] === element){
//         return false;  
//       }
//     }
//     return false; // should not remove this element
//   });
// }

// console.log(getSubArr(arr1, arr2));

