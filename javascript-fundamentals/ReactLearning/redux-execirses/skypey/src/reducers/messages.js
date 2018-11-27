import { getMessages } from '../static-data';

export default (state = getMessages(1), action) => {
    return state;
};