var aws = require('aws-sdk');

//this is the aws config with the keys from .env
aws.config = ({ "accessKeyId": process.env.REACT_APP_AWS_KEY_ID, "secretAccessKey": process.env.REACT_APP_SECRET_KEY, "region": process.env.REACT_APP_REGION })


// this function send the informatin from the form to email reciepient
module.exports = function(formInfo) {
  console.log('in send Email')

// This address must be verified with Amazon SES.
  
  const sender = 'Gunnar Swager Foundation <roger@davenport-home.com>';
  const recipient = 'roger@roger-davenport.com';
  // let dayForSubject = formInfo.date.getDay();
  const subject = `Contact Request from ${formInfo.name}`;

  // The email body for recipients with non-HTML email clients.
  const body_text = `${formInfo.subject}`;
  let  body_html;
  
   
    
    body_html = 
    `<html>
     <head></head>
     <body>
     <h1>${subject}</h1>
     <ul>
        <li><h3>Name: ${formInfo.name}</h3></li>
       
        <li><<h3>${formInfo.contact_input}</h3></a></li>
        <li><h3>Date and Time: ${formInfo.date}</h3></li>
        <li><h3>Message:${formInfo.message} </h3></li>
       
        <li><h3>--------------------------------------</h3></li>
     </ul>
      
      </body>
      </html>`;

  
  


  // The character encoding for the email.
  const charset = 'UTF-8';

  // Create a new SES object. 
  var ses = new aws.SES();
  
  // Specify the parameters to pass to the API.
  var params = { 
    Source: sender, 
    Destination: { 
      ToAddresses: [
        recipient, 
      ],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: charset,
      },
      Body: {
        Text: {
          Data: body_text,
          Charset: charset, 
        },
        Html: {
          Data: body_html,
          Charset: charset,
        },
        
      },
    },
    
  };
  
  //Try to send the email.
   ses.sendEmail(params, function(err, data) {
    // If something goes wrong, print an error message.
    
    if(err) {
      console.log(err.message);
      
    } else {
      console.log('Email sent! Message ID: ', data);
      
    }
  });
   
  
 

}