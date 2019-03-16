import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Events from './components/events';
import Media from './components/media';
import Contact from './components/contact';
import Purchase from './components/purchase';
import Sponsors from './components/sponsors';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="appBody">
        <About />
        <h1>| | |</h1>
        <Events />
        <h1>| | |</h1>
        <Purchase />
        <h1>| | |</h1>
        <Media />
        <h1>| | |</h1>
        <Sponsors />
        <h1>| | |</h1>
        <Contact />
        </div>
      </div>
    );
  }
}

export default App;
