import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme , {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DESTRUCTION } from 'dns';
Enzyme.configure({adapter: new Adapter()});

const state = {
  author: {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn',
        'Life on the Mississippi',
        'Roughing It']
    },
  books: ['The Adventures of Huckleberry Finn',
  'Life on the Mississippi',
  'Roughing It'],
  highlight: 'none',
  onAnswerSelected : () => {}
}

describe("Author Quiz", () => {
  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state}/>, div);
  });

  describe("When no answer is selected", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...state} />);
    });

    it("should have no background color", () => {
      expect(wrapper.find("div.row.turn").props.style.backgroundColor).toBe('');
    })
  })
})