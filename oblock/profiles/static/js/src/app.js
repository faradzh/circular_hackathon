import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import Index from './index';
import SignUp from './components/signUp';
import Dashboard from './components/dashboard';
import MainLayout from './components/mainLayout';
import store from './store';
import auth from './auth';
const history = syncHistoryWithStore(browserHistory, store);

// function requireAuth(nextState, replace) {
//     if(!auth.loggedIn()){
//         replace({
//             pathname: '/app/login/',
//             state: {nextPathName: '/app/'}
//         })
//     }
// }

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/'>
                <IndexRoute component={Index}/>
                <Route path="/sign-up" component={SignUp} />
                <Route path="/dashboard" component={Dashboard} />
            </Route>
        </Router>
    </Provider>, document.getElementById('root-container')
);