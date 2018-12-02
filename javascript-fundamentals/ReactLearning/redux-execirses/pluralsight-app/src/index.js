import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';
import './index.css';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorAction';


const store = configureStore();  // no initialState here as the rootReducer already gaves one, we will override that if pass a state from here
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

