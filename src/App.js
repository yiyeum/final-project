import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Main />
      </div>
    );
  }
}

export default App;
