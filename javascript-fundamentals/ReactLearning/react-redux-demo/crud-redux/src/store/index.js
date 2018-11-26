
import { createStore } from 'redux';
import postReducer from '../reducres/';

const initialState = [
    {id: 1, title: 'First Post', message: 'Learning Redux'},
    {id: 2, title: 'Second Post', message: 'Learning React-Redux'}
]

const store = createStore(postReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store;
