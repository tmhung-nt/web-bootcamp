import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const state = {
    title: 'Vietnamese Sexy Bae Group',
    body: 'Hoàng Tố Hiền',
    imageUrl: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/46261091_203785177206108_4530393673472409600_o.jpg?_nc_cat=104&_nc_ht=scontent.fsgn5-4.fna&oh=5e3133c3fcbf0e12075f36d66a322e2e&oe=5C81FBB3'
}

ReactDOM.render(<App isOpen={false} {...state} newEle={(<div>newEle</div>)}/>, document.getElementById("root"));


