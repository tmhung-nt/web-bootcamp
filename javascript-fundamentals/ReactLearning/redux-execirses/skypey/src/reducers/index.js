import user from './user';
import contacts from './contacts';
import activeUserId from './activeUserId';
import { combineReducers }  from 'redux';

export default combineReducers({ 
    user,
    contacts,
    activeUserId
});

// above code block is the same as below:
// export default combineReducers({
//     user: user,
//     contacts: contacts
//   })