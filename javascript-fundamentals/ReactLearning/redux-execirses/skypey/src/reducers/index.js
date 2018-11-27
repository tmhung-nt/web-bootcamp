import user from './user';
import contacts from './contacts';
import activeUserId from './activeUserId';
import messages from './messages';
import typing from './typing';
import { combineReducers }  from 'redux';

export default combineReducers({ 
    user,
    contacts,
    messages,
    activeUserId,
    typing
});

// above code block is the same as below:
// export default combineReducers({
//     user: user,
//     contacts: contacts
//   })