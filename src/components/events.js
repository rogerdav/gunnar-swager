import React from 'react';

import '../style/events.css';


const Events = (props) => {
  return (
    <div id="events" style={{ height: 800 }}>
    {/* <div className="leftSide_events">
    </div> */}
    <img src={require('../media//book mark 5.jpg')}  alt=""className="firstpic"/>
      <div className="contents events">
      <h1>Upcoming Events</h1>
      <div className="event"></div>
      {/* <div className="event"></div> */}
      
      
      </div>
    {/* <div className="rightSide_events">
    </div> */}
    <img src={require('../media//book mark 6.jpg')} alt=""className="secondpic"/>
  </div>
  );
 }
 
 export default Events;