import React from 'react';
import { Parallax, Background } from 'react-parallax';
import '../style/contact.css';
import image from '../media/cover.jpg';

const Contact = (props) => {
  return (
    <div className="about">
   
   <Parallax bgImage={image} blur={{ min: -2, max: 5 }}>
      <div style={{ height: 1200 }}>
        <div className="insideDiv">
          <h4>Contact Infomation</h4>
          
        
        </div>
      </div>
    </Parallax>
    </div>
  );
 }
 
 export default Contact;