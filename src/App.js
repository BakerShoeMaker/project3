import React, { Component } from 'react';
import './components/Styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import HeaderLogedIn from './components/timer/HeaderLogedIn';
import Title from './components/timer/Title';
import TimerArea from './components/timer/TimerArea';
class App extends Component {
  render() {
    return (
      <div>
          <HeaderLogedIn/>
          <Title/>
          <TimerArea/>

      </div>
    );
  }
}

export default App;
