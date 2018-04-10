import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
