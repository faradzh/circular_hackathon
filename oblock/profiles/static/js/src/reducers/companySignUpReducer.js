/**
 * Created by faradj on 5/13/17.
 */
const INITIAL_STATE = {data: {}};

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type){
        case 'SET_COMPANY_SIGNUP_DATA':
            const name = action.payload.target.name;
            const value = action.payload.target.value;
            const updatedData = Object.assign({}, state.data, {[name]: value});
            console.log("CompanyData", Object.assign({}, state, {data: updatedData}));
            return Object.assign({}, state, {data: updatedData});
            break;

    }
    return state;
}