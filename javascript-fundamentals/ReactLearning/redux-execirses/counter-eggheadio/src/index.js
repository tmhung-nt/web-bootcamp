import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import store from './store';

const render = () => {
    const state = store.getState();
    console.log('CURRENT STATE:')  || console.log(state);
    ReactDOM.render(<App state={state}/>, document.getElementById('root'));
};
render(store.getState());

store.subscribe(render);


