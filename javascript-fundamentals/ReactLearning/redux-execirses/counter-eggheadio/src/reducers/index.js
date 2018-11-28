import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT, DECREMENT } from "../constants/actions-types";
import _ from 'lodash';

const initialState = {
    counters: {
        0: {
            id: 0,
            value: 0
        }  
    }
};
let counterToBeChanged;

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_COUNTER:
            const nextCounterId = +Object.keys(state.counters).pop() + 1;
            const counters = state.counters;
            const returnObj = {
                counters: {
                    ...counters,
                    [nextCounterId]:{
                        id: nextCounterId,
                        value: 0
                    }
                }
            };
            return returnObj;
        case REMOVE_COUNTER:
            const lastCounterId = +Object.keys(state.counters).pop();
            const counterListAfterRemoved = _.omit(state.counters, lastCounterId); 
            return {
                counters:{
                    ...counterListAfterRemoved
                }
            }
        case INCREMENT:
            counterToBeChanged = state.counters[action.counterId];
            return {
                counters: {
                    ...state.counters,
                    [action.counterId]:{
                        ...counterToBeChanged,
                        value: counterToBeChanged.value + 1
                    }
                }
            }
        case DECREMENT:
            counterToBeChanged = state.counters[action.counterId];
            return {
                counters: {
                    ...state.counters,
                    [action.counterId]:{
                        ...counterToBeChanged,
                        value: counterToBeChanged.value - 1
                    }
                }
            }
        default:
            return state;
    }
}