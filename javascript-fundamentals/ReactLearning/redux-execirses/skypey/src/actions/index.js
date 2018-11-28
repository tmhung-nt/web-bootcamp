import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE, EDIT_MESSAGE, UPDATE_MESSAGE } from '../constants/actions-types';

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});

export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
})

export const sendMessage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
})

export const editMessage = (activeUserId, messageId, text) => ({
    type: EDIT_MESSAGE,
    payload: {
        activeUserId,
        messageId,
        text
    }
})

export const updateSelectedMessage = (typing, activeUserId, messageId) => ({
    type: UPDATE_MESSAGE,
    payload: {
        activeUserId,
        messageId,
        typing
    }
})