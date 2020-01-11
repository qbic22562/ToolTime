import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/Login';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Login key='0' />
      </React.Fragment>
    );
  }
}

export default App;
