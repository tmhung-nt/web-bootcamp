import { createStore } from 'redux';
import reducer from '../reducers';

import { devToolsEnhancer } from 'redux-devtools-extension';

// https://codeburst.io/redux-devtools-for-dummies-74566c597d7

const store = createStore(reducer, devToolsEnhancer());
export default store;