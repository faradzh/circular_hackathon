const INITIAL_STATE = {data: {}};

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type){
        case 'SET_DASHBOARD_DATA':
            console.log("Final", Object.assign({}, state, {data: action.payload}));
            return Object.assign({}, state, {data: action.payload});
            break;

    }
    return state;
}