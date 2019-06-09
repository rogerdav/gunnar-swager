import React from 'react';
import '../style/sponsors.css';
import Carousel from '../components/carousel';
import '../style/gunnar.css'

const Gunnar = (props) => {
  return (
    <div id="gunnar" >
   
  
        <div className="contents gunnar">
          <div className="gunnarDescription">
            <h2>Gunnar Swagar</h2>
            <p>
            Gunnar Swager, 23, of Spokane, died December 31, 2016, as a result of injuries sustained in a motor vehicle accident.
            <br />
            He was born January 25, 1993 in Spokane, the son of Marty and Tamera Swager. He attended Madison Elementary, Gary Middle School where he was academic student of the year. He graduated with honors from North Central High School in 2011, where he was a member of both the track and basketball teams. Gunnar had recently graduated Spring 2016 with a Bachelor of Arts in Communication and Marketing with a Minor in Business Administration and Economics from Eastern Washington University. After graduation he relocated to Kenmore, Wa where he was working for Google in Bothell, Wa. In his college years he enjoyed DJing, creating music and performed in numerous festivals and venues, some including non-profits around the northwest.
            </p>
          </div>
          <Carousel />
          
        
        </div>
      </div>
    
    
  );
 }
 
 export default Gunnar;