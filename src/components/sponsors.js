import React from 'react';
import '../style/sponsors.css';

const sponsors=['Julie Markquart', 'Taylor Knight', 'Jes Adams', 'Swager Session', 'Quincy Robertson','Jill Carabin-Robertson', 'Tana Knight', 'Felicia Felch', 'Roxanne Rota', 'Christine Blumenshein', 'Amy Fickenster', 'Brittany Roy', 'Tammy Walters', 'Jan Peters', 'Terry Knight', 'Colleen Crespo', 'James Dreyer', 'Kelly Greenwood', 'Lawrence Kane' ];
let allSponsors = sponsors.map((element, index) => <div key={index}className="brick">&#8226;  {element}  &#8226;</div>)

const Sponsors = (props) => {
  
  return (
    <div id="sponsors" style={{ height: 790 }}>
   
    
      <img src={require('../media/BD_website_03a_pb.jpg')} alt="" className="firstpic"/>
    
      
        <div className="contents sponsors">
          <h1>Friends of The foundation</h1>
          <h4>Thank you to our partners who support our mission</h4>
          <div className="partnerDescription"> 
          <img src={require('../media/partner/patrick.jpg')} alt=""/>
          <div className="info">
            <h4>Patrick Blaine</h4><p> Illustrator "The Blue Devil~Adventures In Topsy Turvy Town"</p>
            <p>He is currently living in Spokane, Washington and is working freelance for clients across the globe. For business and print inquiries, please feel free to contact him at patrickblaine1968@gmail.com and visit his website at <a href="http://PatrickBlaine1968.wix.com/artofpatrickblaine">http://PatrickBlaine1968.wix.com/artofpatrickblaine</a> to see more samples of his work.</p>
          </div>

          </div>
          <div className="partnerDescription"> 
          <img src={require('../media/partner/kris.jpg')} alt=""/>
          <div className="info">
            <h4>Kris Wilder</h4> <p>Mentor</p>
            <p>Kris lives in Seattle Washington. He is a Board-Certified Life Coach, U.S. Martial Arts Hall of Fame Member, and author of 18 books that range in topics from martial arts, to organization and self-development.</p>
            <p>You can reach Kris at Kriswilder@kriswilder.com and visit his website <a href='https://kriswilder.com'>Kriswilder.com,</a> or enjoy his podcasts, <a href="https://kriswilder.com/category/podcast/">The Back Channel</a>, or <a href="https://www.stickmanpublications.com/category/podcasts/">Martial Arts and Life.</a></p>
          </div>

          </div>
          <div className="partnerDescription"> 
          <img src={require('../media/partner/jeff.jpg')} alt=""/>
          <div className="info">
            <h4>Jeff Wieck</h4><p> Wordsmith</p>
            <p>Wordsmith and long-time friend of the Swagers. Jeff is a graduate of Eastern Washington University with a BA in English, who has written most of his entire life for the amusement of friends and family. It was his distinct honor to ply his skills in proofreading Gunnar's work</p>
          </div>

          </div>
          <div className="partnerDescription"> 
          <img src={require('../media/partner/roger.jpeg')} alt=""/>
          <div className="info">
            <h4>Roger Davenport</h4> <p>Web Developer</p>
            <p>Roger is a web developer living in Seattle Wa. <br /><a href="https://www.linkedin.com/in/roger-davenport/">linkedin</a></p>
          </div>

          </div>
          <div className="partnerDescription"> 
          <img src={require('../media/zach1.png')} alt=""/>
          <div className="info">
            <h4>Zach Robyn</h4><p> Gunnar Swager Foundation Logo Designer</p>
            <p></p>
          </div>

          </div>
          
          <div className="partnerDescription"> 
          <img src={require('../media/jackhammer.png')} alt=""/>
          <div className="info">
            <p> <a href="www.jackhammerpromotions.com">JACKHAMMER Promotions Inc.</a></p>
            <p></p>
          </div>

          </div>
          <div className="partnerDescription"> 
            <img src={''} alt=""/>
            <div className="info">
              <h4>Chinese Gardens</h4>
              <p>
              5207 E Trent Ave,<br />
              Spokane, WA<br />
              </p>
            </div>

          </div>
          <div className="partnerDescription"> 
            <img src={'http://kzmiller.com/kami-portrait.jpg'} alt=""/>
            <div className="info">
              <h4>Kami Miller</h4>
              <p>Publisher</p>
              <p>
              <a href="http://kzmiller.com/index.html">kzmiller.com</a></p>
            </div>

          </div>
          
          <h2 style={{marginTop: "3%"}}>We would like to thank our major contributors</h2>
          <div className="sponsors_wall">
            {allSponsors}
          </div>
       
        </div>
      <img src={require('../media/book mark 4.jpg')} alt=""className="secondpic" />
    
    </div>
  );
 }
 
 export default Sponsors;