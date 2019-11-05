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
      <div className="testimonials">
      <p>Dear Marty and Tamera:</p>
      <p>On behalf of everyone at Ronald McDonald House Charities of the Inland Northwest (RMHC InNW), I would like to thank you for your donation of stuffed animals. Over the past three decades, thousands of families with critically ill or injured have found solace at our "home-away-from-home" thanks to generous donors like you.</p>
      <p>With your help, we are expanding our family campus in Spokane to meet the growing demand for our housing and support programs. We have also expanded in Coeur d'Alene on the Kootenai Health Campus. Donors like you make it possible for us to increase the number of rooms available with the goal of eliminating our waiting list. Your generosity makes our expansions possible and we are truly grateful.</p>
      <p>As we look forward, we know that with the continued advancement of pediatric services offered in the region it means more families than ever will depend on Ronald McDonald Houses. Thank you for helping us prepare to meet the needs of children and families from around the Inland Northwest seeking medical care in Spokane and Coeur d'Alene.</p>
      <p>Thank you for helping us keep families close when it matters most.</p>
      <p>Gratefully,</p>
      <p>Mike Forness, <br />
         Executive Director,<br />
         Ronald McDonald House Charities of the Inland Northwest.</p>

      </div>
      
      
      </div>
      <img src={require('../media/BD_website_01a_pb.jpg')} alt=""className="secondpic" />
    
  </div>
  );
 }
 
 export default Review;