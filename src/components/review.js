import React from 'react';

import '../style/review.css';


const Review = (props) => {
  return (
    <div id="review" style={{ height: 800 }}>
    <img src={require('../media/BD_website_03a_pb.jpg')} alt=""className="firstpic" />
      <div className="contents review">
      <h1>Thanks from our beneficiaries</h1>
      <div className="testimonials">
      <p>Dear Friends</p>
      <p>It was such a pleasure to accept your gift of the many stuffed animals to benefit Shriners Hospitals for Children - Spokane. By sending your love to the rescue with this wonderful gift, you are helping to heal our patients and warm their parents' hearts.</p>
      <p>Whether we are providing critical treatment that will ultimately help a newborn child with club feet walk normally or repairing the spine for a teenager with scoliosis so they may stand up straight, you are a big part of our success.</p>
      <p>On behalf of all of the children receiving care at the Spokane Shriners Hospital, thank you for supporting our mission.</p>
      <p>Angelique Heinzen.</p>
      </div>
      
      
      </div>
      <img src={require('../media/BD_website_01a_pb.jpg')} alt=""className="secondpic" />
    
  </div>
  );
 }
 
 export default Review;