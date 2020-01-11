import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/Login';
import Router from './routes/Router';

class App extends Component {
  render() {
    return <Router />;
  }
}

export default App;
