import React, { Component } from 'react';
import '../Css/Contact.css' ;
import emailjs from 'emailjs-com';

class Contact extends Component {
    constructor(){
        super() ;
        this.state = {
            message : "" , 
            from_name : "",
            from_email : "" ,
            contact : ""

        } 
        this.myRef = React.createRef();
    }
    handleStateChange = (field , value) => {
        this.setState({
            [field] : value
        })
       
    }
   
    handleSendMessage = (e) => {
        e.preventDefault() ;
        const node = this.myRef.current;
        console.log(node) ;
        emailjs.sendForm('service_cjiwl5g', 'template_5wvim5g', node , 'user_Hmeci3CJ2FPY6UpsjFpDX')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }
    render() {
        return (
            <div className="contact">
                <form ref={this.myRef} 
                      onSubmit={(e) => this.handleSendMessage(e)}
                      id="senderForm">
                   
                    <input type="text" 
                           name="from_name" 
                           id="senderName"
                           className='inputTags'
                           required
                           placeholder='Your Name'/><br/>
                    
                    <input type="email" name="from_email" 
                            id="senderEmail"
                            className='inputTags'
                            required
                            placeholder='Your Email'/><br/>
                    
                    <input type="text" name="contact" 
                            id="senderContact"
                            className='inputTags'
                            placeholder='Your Contact Number'/><br/>
                 
                    <textarea name="message" id="senderMessage"
                            className='inputTags' 
                            placeholder='Keep your message short'
                            required/>
                    <input type="submit" value="Send Message !" 
                           id="sendButton"/>
               </form>
            </div>
        );
    }
}

export default Contact;
