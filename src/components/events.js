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
      <a href=" https://www.amazon.com/BLUE-DEVIL-ADVENTURES-TOPSY-TURVY-TOWN/dp/0578587211/ref=sr_1_1?keywords=book+gunnar+swager&qid=1572896968&sr=8-1
        ">
        <div className="event">
          
      </div>
      </a>
      {/* <div className="event"></div> */}
      
      
      </div>
    {/* <div className="rightSide_events">
    </div> */}
    <img src={require('../media//book mark 6.jpg')} alt=""className="secondpic"/>
  </div>
  );
 }
 
 export default Events;