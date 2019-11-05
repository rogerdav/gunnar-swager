import React from 'react';
import '../style/purchase.css';
import Donate from './donate-button';

const Purchase = (props) => {
  return (
  <div id="help" style={{ height: 800 }}>
      {/* <div className="leftSide_purchase">
      </div> */}
      <img src={require('../media/BD_website_03a_pb.jpg')} alt=""className="firstpic" />
      <div className="contents help">
      <h1>How To Help</h1>
       {/* <h4></h4> */}
       <h4>With your help we can give comfort care toys for children in crisis.</h4>
       <h4>Make a donation.</h4>
       <h4>
        Your donation directly supports children in a crisis situation.
       </h4>
       <Donate pid="donateButton2" />
       <h4>Purchase "The Blue Devil~Adventures in Topsy Turvy Town" <br />
            Available for sale on Amazon.com</h4>
       <a href=" https://www.amazon.com/BLUE-DEVIL-ADVENTURES-TOPSY-TURVY-TOWN/dp/0578587211/ref=sr_1_1?keywords=book+gunnar+swager&qid=1572896968&sr=8-1
">

      <img src={require('../media/bookcoversmall.jpg')} alt=""style={{ "marginTop": "5%"}} />
</a>
      <div className="socialIcons">
        <a href="https://www.facebook.com/Gunnar-Swager-Foundation-311191866465685/" className="fa fa-facebook"></a>
        <a href="https://twitter.com/GunnarSwager?ref_src=twsrc%5Etfw" className="fa fa-twitter" ></a>
        <a href="https://www.instagram.com/gswagfoundation?igshid=1l3g6acsb2g1t
" className="fa fa-instagram"></a>

      </div>

      <h4>Your donation or purchase of the "The Blue Devil~Adventures in Topsy Turvy Town" directly supports children in crisis situations! You can help a child feel more secure and stable in the midst of a stressful event.</h4>
      
      </div>
      {/* <div className="rightSide_purchase">
      </div> */}
      <img src={require('../media/book mark 4.jpg')} alt=""className="secondpic"/>
    </div>
  );
 }
 
 export default Purchase;