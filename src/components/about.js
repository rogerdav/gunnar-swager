import React from 'react';
import '../style/about.css';


const About = (props) => {
  return (
    
   
   
    <div id="about" >
      
      <img src={require('../media/BD_website_01a_pb.jpg')} />
      <div className="contents about">
      <h1>GUNNAR SWAGER FOUNDATION</h1>
          <h4>Our Mission:</h4>
          <p>Provide comfort care toys to children in crisis situations, to help them feel more secure and stable in the midst of a stressful event.</p>
          <img src={require('../media/page1pic1.jpg')}/>
          <h4>Our Story:</h4>
          <p>December 31, 2016, we lost our son Gunnar Swager due to an auto accident. The week before his passing, he was home for Christmas from Seattle and expressed to us that he wanted to create a stuffed animal that was different for children, so they would have something to open on Christmas. For his celebration of life gathering, we requested family and friends to bring stuffed animals instead of flowers. The stuffed animals from his memorial service, numbering in the thousands, were donated to various Shriner Hospitals throughout the USA and Law enforcement/emergency response agencies in our community.
          </p>
          <img style={{ "width": "35%"}} src={require('../media/page1pic2.jpg')}/>
          <p>
          Gunnar passed before we could brainstorm properly on his project. Later, while we were going over his things, we found a book he had written at 11 years old, "The Blue Devil". It was Gunnar's dream to have this book published. At that moment, as we read it again, the dreams of a child and the vision of a young man came together, and the foundation was formed to help children.
          </p>
          <h4>Where does my money go?</h4>
          <p>
          Your donation and/or purchase of the book "The Blue Devil-Adventures is Topsy Turvy Town" will go to law enforcement/emergency response agencies to purchase Comfort care toys to children in a crisis situation, to help them feel more secure and stable in the midst of a stressful event.
          </p>

          
          
          
      
      
      </div>
      
      <img src={require('../media/BD_website_02a_pb.jpg')} />
    </div>
    
  );
 }
 
 export default About;