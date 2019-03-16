import React from 'react';
import logo1 from '../media/logo.jpeg';
import '../style/header.css'

const Header = (props) => {
 return (
   <div className="header">
     <img className="headerLogo" src={logo1} alt="logo"></img>
     <div className="headerTitle">
     <h1>Gunnar Swager Foundation</h1>
     <h3>'Comfort for Kids in crisis'</h3>

     </div>
   </div>
 );
}

export default Header;