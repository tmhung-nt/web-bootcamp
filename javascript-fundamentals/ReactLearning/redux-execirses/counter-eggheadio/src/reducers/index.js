import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT, DECREMENT } from "../constants/actions-types";
import _ from 'lodash';

let counterID;
const addNewCounter = (id) => ({
    id,
    value: 0
})


const initialState = {
    counters: [ 
        addNewCounter(0)
    ],
    allCounterIDs: [0]
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_COUNTER:
            const nextCounterId = state.allCounterIDs.length;
            const returnObj = {
                allCounterIDs: state.allCounterIDs.concat([nextCounterId]),
                counters:{
                    ...state.counters,
                    [nextCounterId]: addNewCounter(nextCounterId)
                }

            };
            return returnObj;
        case REMOVE_COUNTER:
            const lastCounterId = state.allCounterIDs.length - 1;
            const counterListAfterRemoved = _.omit(state.counters, lastCounterId); 
            return {
                allCounterIDs: state.allCounterIDs.slice(0, lastCounterId),
                counters:{
                    ...counterListAfterRemoved
                }
            }
        case INCREMENT:
            counterID = state.counters[action.counterId];
            return {
                ...state,
                counters: {
                    ...state.counters,
                    [action.counterId]:{
                        ...counterID,
                        value: counterID.value + 1
                    }
                }
            }
        case DECREMENT:
            counterID = state.counters[action.counterId];
            return {
                ...state,
                counters: {
                    ...state.counters,
                    [action.counterId]:{
                        ...counterID,
                        value: counterID.value - 1
                    }
                }
            }
        default:
            return {
                ...state,
                counters: _.keyBy(state.counters,'id')
            };
    }
}