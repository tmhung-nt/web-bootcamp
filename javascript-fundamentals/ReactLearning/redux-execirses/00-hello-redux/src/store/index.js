import { createStore } from 'redux';
import reducer from '../reducres';


const initialState = {tech: 'React'};

export const store = createStore(reducer, initialState);