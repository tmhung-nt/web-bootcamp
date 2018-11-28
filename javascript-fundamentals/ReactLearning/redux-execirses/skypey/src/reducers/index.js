import user from './user';
import contacts from './contacts';
import activeUserId from './activeUserId';
import messages from './messages';
import typing from './typing';
import updateMessage from './updateMessage';

import { combineReducers }  from 'redux';

// initialState is created from reducers
// each sub reducer create a part of the total app's state
// each sub reducer is a function actually

export default combineReducers({ 
    user,
    contacts,
    messages,
    activeUserId,
    typing,
    updateMessage
});

// above code block is the same as below:
// export default combineReducers({
//     user: user,
//     contacts: contacts
//     messages: messages
//     activeUserId: activeUserId
//     typing: typing
//   })