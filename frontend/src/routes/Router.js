import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import MainPage from '../components/MainPage';

class Router extends Component {
  render() {
    return (
      <div>
        {/* <TopBar /> */}
        <BrowserRouter>
          <Route exact path={'/'}>
            <Login />
          </Route>
          <Route exact path={'/register'}>
            <Register />
          </Route>
          <Route path='/home'>
            <MainPage />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
