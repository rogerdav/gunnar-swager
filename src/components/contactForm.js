import React from 'react';
import sendEmail from './sendemail';
import '../style/contactForm.css';
import { Button, FormGroup, Label, Input, } from 'reactstrap';



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
        <FormGroup row>
          <Label for="Name">Name</Label>
          <Input value={this.state.name}type="text" name="name" id="Name" placeholder="" onChange={(e) => this.handleInputChange(e)} />
        </FormGroup>
        <FormGroup row>
          <Label for="Email">Email or Phone Number</Label>
          <Input value={this.state.contact_input}type="email" name="contact_input" id="Email" placeholder="" onChange={(e) => this.handleInputChange(e)} />
        </FormGroup>
        <FormGroup row sm={2}>
          <Label for="Message">Message</Label>
          <Input value={this.state.message} type="textarea" name="message" id="Message" placeholder="" onChange={(e) => this.handleInputChange(e)} />
        </FormGroup>
        <Button className="submitButton" 
                onClick={() => this.submitCallRequest()}
                style={{ backgroundColor: submittable ? 'green' : 'light grey' }}
        >Submit</Button>
      </div>
    )
  }
}

export default ContactForm;