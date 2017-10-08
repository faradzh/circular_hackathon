import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import Index from './index';
import SignUp from './components/signUp';
import CompanySignUp from './components/companySignUp';
import Dashboard from './components/dashboard';
import Login from './login';
import MainLayout from './components/mainLayout';
import store from './store';
import auth from './auth';
const history = syncHistoryWithStore(browserHistory, store);

function requireAuth(nextState, replace) {
    if(!auth.loggedIn()){
        replace({
            pathname: '/login',
            state: {nextPathName: '/dashboard'}
        })
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/'>
                <IndexRoute component={Index}/>
                <Route path="/sign-up" component={SignUp} />
                <Route path="/company-sign-up" component={CompanySignUp} />
                <Route path="/dashboard" component={Dashboard} onEnter={requireAuth}/>
                <Route path="/login" component={Login} />
            </Route>
        </Router>
    </Provider>, document.getElementById('root-container')
);