import React, { Component } from 'react';
import './components/Styles.css';
import Header from './components/index/Header';
import Hero from './components/index/Hero';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Hero/>
      </div>
    );
  }
}

export default App;
