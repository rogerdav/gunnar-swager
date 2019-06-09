import React from 'react';
import '../style/contact.css';
import ContactForm from '../components/contactForm';

const Contact = (props) => {
  return (
    <div id="contact" style={{ height: 800 }}>
      <img src={require('../media/BD_website_01a_pb.jpg')} alt=""className="firstpic" />
      
        <div className="contents contact">
          <h1>Contact Infomation</h1>
          <h5>Gunnar Swager Foundation</h5>
          <h5>5915 N Normandie St</h5>
          <h5>Spokane, WA 99205</h5>
          <a href = "mailto: info@gunnarswagerfoundation.com"><h5>info@gunnarswagerfoundation.com</h5></a>
          {/* <h5>info@gunnarswagerfoundation.com</h5> */}
          <h5>509-939-2518</h5>
          <ContactForm />
        </div>
        
        <img src={require('../media/BD_website_01a_pb.jpg')} alt=""className="secondpic" />
    </div>
  );
 }
 
 export default Contact;