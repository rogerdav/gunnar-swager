import React from 'react';
import logo1 from '../media/logo.png';
import '../style/header.css'

const Header = (props) => {
  console.log('this is props in header', props.scrolling);
 return (
   <div className="header">
     {/* <div className="headerTitle"> */}
     <a href="/">
     <img className="headerLogo" src={logo1} alt="logo"></img>

     </a>
     <h1>'Comfort for Kids in crisis'</h1>

   </div>
 );
}

export default Header;