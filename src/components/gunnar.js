import React from 'react';
import { Parallax, Background } from 'react-parallax';
import '../style/sponsors.css';
import image from '../media/book.jpg';
import Carousel from '../components/carousel';
import '../style/gunnar.css'

const Gunnar = (props) => {
  return (
    <div id="gunnar" style={{ height: 800 }}>
   
  
      
        <div className="insideDiv">
         <Carousel />
          
        
        </div>
      </div>
    
    
  );
 }
 
 export default Gunnar;