import React from 'react';
import { Parallax, Background } from 'react-parallax';
import '../style/sponsors.css';
import image from '../media/book.jpg';

const sponsors=['Kris Wilder', 'Roger Davenport', 'Marty Swager', 'person d']
let allSponsors = sponsors.map((element, index) => <div key={index}className="brick">&#8226;  {element}  &#8226;</div>)

const Sponsors = (props) => {
  
  return (
    <div id="sponsors" style={{ height: 790 }}>
   
    
      <img src={require('../media/BD_website_03a_pb.jpg')} />
    
      
        <div className="contents sponsors">
          <h1>Friends of The foundation</h1>
          <p>We will put the logos of the sponsors in this space</p>
          <p>I was thinking that we could have a "brick wall" at the </p>
          <p>bottom of this section where you could have a "brick"</p>
          <p>with each presons name that donated more than $100</p>
          <h2>The Following have donated more than $100</h2>
          <div className="sponsors_wall">
            {allSponsors}
          </div>
       
        </div>
      <img src={require('../media/book\ mark\ 4.jpg')} />
    
    </div>
  );
 }
 
 export default Sponsors;