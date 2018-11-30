export default (state = [], action) => {
    switch(action.type){
        case 'CREATE_COURSE':
            return [ ...state, Object.assign({}, action.course) ];
            // return state.concat([action.course]);
        default:
            return state;
    }
}