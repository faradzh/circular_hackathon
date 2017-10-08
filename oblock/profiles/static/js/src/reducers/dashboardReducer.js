const INITIAL_STATE = {data: {}, transactionData: {}};

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type){
        case 'SET_DASHBOARD_DATA':
            return Object.assign({}, state, {data: action.payload});
            break;

        case 'SET_TRANSACTION_DATA':
            const name = action.payload.target.name;
            const value = action.payload.target.value;
            const updatedData = Object.assign({}, state.transactionData, {[name]: value});
            console.log("TransactionData", Object.assign({}, state, {transactionData: updatedData}));
            return Object.assign({}, state, {transactionData: updatedData});
            break;

    }
    return state;
}