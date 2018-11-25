

export const reducer = ( state, action ) => {
    switch(action.type){
        case 'WITHDRAW_AMOUNT':
            return {
                ...state,
                totalAmount: state.totalAmount - action.amount
            };
        default:
            return state;
    }
}