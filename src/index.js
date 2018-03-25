import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RecruiterInfo from './containers/RecruiterInfo/RecruiterInfo';
import CandidateInfo from './containers/CandidateInfo/CandidateInfo';
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import AuthRoute from './components/AuthRoute/AuthRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Chat from './components/Chat/Chat';

import reducers from './reducer';
import './config';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <div>
                    <AuthRoute/>
                    <Switch>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/recruiterinfo' component={RecruiterInfo}>Recruiter Info</Route>
                        <Route path='/candidateinfo' component={CandidateInfo}>Candidate Info</Route>
                        <Route path='/chat/:user' component={Chat}>Chat</Route>
                        <Route component={Dashboard}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
