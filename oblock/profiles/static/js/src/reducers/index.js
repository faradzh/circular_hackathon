import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import dashboardReducer from './dashboardReducer';

export default combineReducers({
    routing,
    signUpReducer,
    dashboardReducer
});
