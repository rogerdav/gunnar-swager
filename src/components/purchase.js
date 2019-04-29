import React from 'react';
import '../style/purchase.css';

const Purchase = (props) => {
  return (
  <div id="help" style={{ height: 800 }}>
      {/* <div className="leftSide_purchase">
      </div> */}
      <img src={require('../media/BD_website_03a_pb.jpg')} />
      <div className="contents">
      <h1>How To Help</h1>
          <p>Help the foundation by buying a book</p>
          <p>there will be a link here to Amazon</p>
          <p>Donate some money to the foundation</p>
          <p>you can also have any links here that link to</p>
          <p>things for sale</p>
      
      </div>
      {/* <div className="rightSide_purchase">
      </div> */}
      <img src={require('../media/book\ mark\ 4.jpg')} />
    </div>
  );
 }
 
 export default Purchase;