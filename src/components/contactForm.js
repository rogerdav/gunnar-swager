import React from 'react';
import sendEmail from './sendemail';
import '../style/contactForm.css';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
      name: '',
      contact_input: '',
      message: '',
      
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitCallRequest = this.submitCallRequest.bind(this);
    this.resetState = this.resetState.bind(this);
    
  }

  
  
  submitCallRequest() {
    console.log('submitted');
    sendEmail(this.state);
    this.resetState();
  }
  resetState() {
    
    this.setState({
      date: '',
      name: '',
      contact_input: '',
      
      message: '',
      
    });
    

  }
  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
    
  }

  render() {
    let submittable = false;
    if(this.state.name && this.state.contact_input) {
      submittable = true
    }
    return (
      <div className="contactForm">
      

      
        <label for="name">Name</label>
        <input 
          vlaue={this.state.name}
          type="text" 
          name="name" 
          id="name" 
          placeholder="name" 
          onChange={this.handleInputChange}/>

       
     
          <label for="email">Contact</label>
          <input 
            type="text" 
            name="contact_input" 
            id="contact_input" 
            placeholder="email or phone " 
            onChange={this.handleInputChange}/>
         
          <label for="message">Message</label>
          <input 
            style={{ height: 200}}
            type="textarea" 
            name="message" 
            id="message" 
            // placeholder="Message" 
            onChange={this.handleInputChange}/>

        <button
        className="submitButton"
        style={{ backgroundColor: submittable ? 'green' : 'lightGrey' }}
        onClick={() => this.submitCallRequest()}>
          Submit
        </button>
        

      </div>
    );
  }
}

export default ContactForm;