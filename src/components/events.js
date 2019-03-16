import React from 'react';
import { Parallax, Background } from 'react-parallax';
import '../style/events.css';
import image from '../media/about.jpg';

const Events = (props) => {
  return (
    <div className="about">
   
   <Parallax bgImage={image} blur={{ min: -5, max: 15 }}>
      <div style={{ height: 1200 }}>
        <div className="insideDiv">
          <h4>Upcoming Events</h4>
          <iframe title="calendar"
          src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=f0c5qqmjser8i4ke318uo23g08%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=America%2FLos_Angeles"
           style={{borderWidth:0, width:700, height:525, frameborder: 0,scrolling: 'no'}}>
           </iframe>
        
        </div>
      </div>
    </Parallax>
    </div>
  );
 }
 
 export default Events;