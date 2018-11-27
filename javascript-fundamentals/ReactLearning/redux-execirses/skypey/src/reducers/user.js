import { generateUser } from '../static-data';

// const user = (state = generateUser() , action) => {
//     return state;
// };

// export default user;

export default (state = generateUser() , action) => {
    return state;
};