import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';
import './index.css';
import routes from './routes';

ReactDOM.render(
    <BrowserRouter>
        {routes}
    </BrowserRouter>,
    document.getElementById('root')
);

