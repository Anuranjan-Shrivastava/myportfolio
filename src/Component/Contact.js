import React, { Component } from 'react';
import '../Css/Contact.css' ;
import emailjs from 'emailjs-com';
import { validate } from 'react-email-validator';

class Contact extends Component {
    constructor(){
        super() ;
        this.state = {
            message : "" , 
            from_name : "",
            from_email : "" ,
            contact : "", 
            messageSending : false 

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
        if(this.state.messageSending === true)return ;
        const { from_email , contact} = this.state  ;
        if(validate(from_email) === false){
            this.acknowledgeUser(2) ; return ;
        }
        if(contact.length > 0){
            if(contact.length !== 10 && contact.length !== 12){
                this.acknowledgeUser(3) ; return ;
            }
            for(let i = 0 ; i < contact.length ; i++){
                let num = contact.charCodeAt(i) ;
                if(num < 48 || num > 57){
                    this.acknowledgeUser(4) ;
                    return ;
                }
            }
        }
       
        this.setState({
            messageSending : true 
        })
        const node = this.myRef.current;
        emailjs.sendForm('service_cjiwl5g', 'template_5wvim5g', node , 'user_Hmeci3CJ2FPY6UpsjFpDX')
        .then((result) => {
            this.setState({
                messageSending : false 
            })
            this.acknowledgeUser(1) ;
        }, (error) => {
            this.setState({
                messageSending : false 
            })
            this.acknowledgeUser(0) ;
        });

    }

    acknowledgeUser = (status) => {
        var acknowledge = document.getElementsByClassName('acknowledgment')[0] ;
        if(status === 1){
            acknowledge.style.top = "5px" ;
            acknowledge.style.backgroundColor = "green" ;
            acknowledge.textContent = "Delivered..!" ;
            var tages = document.getElementsByTagName('input') ; 
            for(let i = 0 ; i < tages.length-1 ; i++){
                tages[i].value = "" ;
            }
            document.getElementsByTagName('textarea')[0].value = "" ;
            setTimeout(() => {
                acknowledge.style.top = "-50px" ;

            } , 1000) ;
            
        }else if(status === 0) {
            acknowledge.style.top = "5px" ;
            acknowledge.style.backgroundColor = "red" ;
            acknowledge.textContent = "Try again..!" ;
            setTimeout(() => {
                acknowledge.style.top = "-50px" ;
            } , 1000) ;
        }else if(status === 2){
            acknowledge.style.top = "5px" ;
            acknowledge.style.backgroundColor = "red" ;
            acknowledge.textContent = "Invalid email" ;
            setTimeout(() => {
                acknowledge.style.top = "-50px" ;
            } , 1000) ;
        }else if(status === 3){
            acknowledge.style.top = "5px" ;
            acknowledge.style.backgroundColor = "red" ;
            acknowledge.style.fontSize = "20px" ;
            acknowledge.textContent = "Invalid/Remove +" ;
            setTimeout(() => {
                acknowledge.style.top = "-50px" ;
            } , 1000) ;
        }else if(status === 4){
            acknowledge.style.top = "5px" ;
            acknowledge.style.backgroundColor = "red" ;
            acknowledge.style.fontSize = "20px" ;
            acknowledge.textContent = "Only digits allowed" ;
            setTimeout(() => {
                acknowledge.style.top = "-50px" ;
            } , 1000) ;
        }
    }
    render() {
        let {messageSending} = this.state ; 
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
                           placeholder='Your Name'
                           onChange={(e) => this.handleStateChange("from_name" , e.target.value)} /><br/>
                    
                    <input type="email" name="from_email" 
                            id="senderEmail"
                            className='inputTags'
                            required
                            placeholder='Your Email'
                            onChange={(e) => this.handleStateChange("from_email" , e.target.value)}/><br/>
                    
                    <input type="text" name="contact" 
                            id="senderContact"
                            className='inputTags'
                            placeholder='Your Contact Number'
                            onChange={(e) => this.handleStateChange("contact" , e.target.value)}/><br/>
                 
                    <textarea name="message" id="senderMessage"
                            className='inputTags' 
                            placeholder='Contact to work together or to appreciate my work.'
                            required
                            onChange={(e) => this.handleStateChange("message" , e.target.value)}/>
                    <input type="submit" 
                           value={messageSending ? "Sending...": "Send Message !"} 
                           id="sendButton"
                           />
               </form>
               <div className='acknowledgment'>
                  
               </div>
            </div>
        );
    }
}

export default Contact;
