import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import '../style/menu.css';
 
class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }
 
  render () {
    return (
      <Menu noOverlay>
        <a id="homemenu" className="menu-item" href="#about">The Foundation</a>
        <a id="helpmenu" className="menu-item" href="#help">How you can help</a>
        <a id="eventmenu" className="menu-item" href="#events">Events</a>
        <a id="mediamenu" className="menu-item" href="#media">Media</a>
        <a id="sponsormenu" className="menu-item" href="#sponsors">Friends of the foundation</a>
        <a id="gunnarmenu" className="menu-item" href="#aboutgunnar">About Gunnar Swager</a>
        <a id="contactmenu" className="menu-item" href="#contact">Contact</a>
      </Menu>
    );
  }
}
export default Example;
