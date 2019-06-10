import React from 'react';
import DonateButton from '../components/donate-button'

import '../style/footer.css'

const Footer = (props) => {
 return (
   <div className="footerContainer">
     <div className="socialIcons footer">
        <a href="https://www.facebook.com/Gunnar-Swager-Foundation-311191866465685/" className="fa fa-facebook"></a>
        <a href="https://twitter.com/GunnarSwager?ref_src=twsrc%5Etfw" className="fa fa-twitter" ></a>
        <a href="https://www.instagram.com/gswagfoundation?igshid=1l3g6acsb2g1t" className="fa fa-instagram"></a>

        <DonateButton />
      </div>
      <h2>Comfort for Kids in Crisis</h2>
     

   
   </div>
 );
}

export default Footer;