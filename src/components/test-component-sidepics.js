import React from 'react';
import '../style/test.css';

const Test = (props) => {
  return (
    <div id="testsheet" style={{ height: 800 }}>
      {/* <div className="leftSide">
      </div> */}
      <img src={require('../media/BD_website_01a_pb.jpg')} />
      <div className="contents">
      <h1>Contents will go here</h1>
      
      </div>
      <img src={require('../media/BD_website_01a_pb.jpg')} />
      {/* <div className="rightSide">
      </div> */}
    </div>
  );
 }
 
 export default Test;