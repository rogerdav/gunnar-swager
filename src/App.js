import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Events from './components/events';
import Media from './components/media';
import Contact from './components/contact';
import Purchase from './components/purchase';
import Sponsors from './components/sponsors';
import Footer from './components/footer';
import Donate from './components/donate-button';
import Example from './components/menu';
import Review from './components/review';
import Gunnar from './components/gunnar';
import Test from './components/test-component-sidepics';
import Carousel from './components/carousel';
import NavHeader from './components/nav';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Route,
  HashRouter
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: false,
    };
    // this.handleScroll = this.handleScroll.bind(this);
  }
 

  render() {
    return (
      <div className="App">
          {/* <Example />
          <Header scrolling={this.state.scrolling} pageWrapId={ "menuBody" }/> */}
          <NavHeader />
          <HashRouter>
            <div className="appBody" id="menuBody">
                <Route exact path='/' component={About} />
                <Route path='/help' component={Purchase} />
                <Route path='/events' component={Events} />
                <Route path='/media' component={Media} />
                <Route path='/sponsors' component={Sponsors} />
                <Route path='/gunnar' component={Gunnar} />
                <Route path='/contact' component={Contact} />
                <Route path='/review' component={Review} />
                <Route path='/test' component={Test} />
            </div>
          </HashRouter>
          
          <Donate pid="donateButton"/>
          
        </div>

    );
  }
}

export default App;