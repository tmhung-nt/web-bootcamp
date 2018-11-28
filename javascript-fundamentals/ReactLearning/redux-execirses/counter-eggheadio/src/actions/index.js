import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT, DECREMENT } from "../constants/actions-types";

export const addCounter = () => ({
    type: ADD_COUNTER
})

export const removeCounter = () => ({
    type: REMOVE_COUNTER
})

export const increaseCounter = (id) => ({
    type: INCREMENT,
    counterId: id
})

export const decreaseCounter = (id) => ({
    type: DECREMENT,
    counterId: id
})


