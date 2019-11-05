import React, { Component} from 'react';
import '../style/nav.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
// import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
  }
  render() {
    return(
      <HashRouter>
      
      <Navbar id="fixednavbar" light expand="xl">
          <NavbarBrand href="/">
          <div id="logo">
          {/* <h4>GS</h4> */}
          <img src={require('../media/logo.png')}alt="" ></img>
          </div>
          {/* <div className="mobilePhoneHeading"> */}
          {/* <h1></h1> */}
        {/* </div> */}
          
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                  <NavItem className="lineItem">
                      <NavLink to="/" onClick={this.toggle}>Foundation</NavLink>
                  </NavItem>
                  <NavItem className="lineItem">
                      <NavLink to="/help" onClick={this.toggle}>How you can help</NavLink>
                  </NavItem>
                  <NavItem className="lineItem">
                      <NavLink to="/events" onClick={this.toggle}>Events</NavLink>
                  </NavItem>
                  <NavItem className="lineItem">
                      <NavLink to="/media" onClick={this.toggle}>Media</NavLink>
                  </NavItem>
                  <NavItem className="lineItem">
                      <NavLink to="/sponsors" onClick={this.toggle}>Foundation Friends</NavLink>
                  </NavItem>
                  <NavItem className="lineItem">
                      <NavLink to="/gunnar" onClick={this.toggle}>About Gunnar</NavLink>
                  </NavItem>
                  <NavItem className="lineItem">
                      <NavLink to="/contact" onClick={this.toggle}>Contact</NavLink>
                  </NavItem>
                  <NavItem className="lineItem">
                      <NavLink to="/review" onClick={this.toggle}>Testimonials</NavLink>
                  </NavItem>
              </Nav>
          </Collapse>
      </Navbar>

      </HashRouter>
    )
  }
}

export default NavHeader;