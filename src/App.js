import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/Nav';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Nav />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
