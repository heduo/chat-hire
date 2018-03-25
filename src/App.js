import React, { Component } from 'react';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import {Route} from 'react-router-dom';
import AuthRoute from './components/AuthRoute/AuthRoute';

class App extends Component {
  render() {
    return (
      <div >
          <AuthRoute />
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
      </div>
    );
  }
}

export default App;
