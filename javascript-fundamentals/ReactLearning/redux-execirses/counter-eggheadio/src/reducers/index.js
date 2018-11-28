import { ADD_COUNTER, REMOVE_COUNTER } from "../constants/actions-types";
import _ from 'lodash';

const initialState = {
    counters: {
        0: {
            id: 0,
            value: 0
        }  
    }
};

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
            return _.omit(state.counters, action.payload); //action.payload is counterId
        default:
            return state;
    }
}