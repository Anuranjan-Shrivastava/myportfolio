import React, { Component } from 'react';
import '../Css/About.css' ;
import def from '../Css/defaultB.jpg' ;
import deft from '../Css/defaultT.jpg' ;
import b1 from '../Css/1.jpg' ;
import b2 from '../Css/2.png' ;
import b3 from '../Css/3.jpg' ;
import b4 from '../Css/4.jpg' ;
import b5 from '../Css/5.jpg' ;
import b6 from '../Css/6.jpg' ;
import t1 from '../Css/t1.png' ;
import t2 from '../Css/t2.jpg' ;
import t3 from '../Css/t3.png' ;
import t4 from '../Css/t4.jpg' ;
import t5 from '../Css/t5.jpg' ;
import t6 from '../Css/t6.png' ;


class About extends Component {
    constructor(){
        super() ;
        this.state = {
            arr : [b1,b2,b3,b4,b5,b6] , 
            arrT : [t1 , t2 , t3 , t4 , t5 , t6] ,
            slider : null 
        }
    }


    startSlideShow = async (field) => {
       
        if(field === "books"){
            let frame = document.getElementsByClassName('about-extra')[0] ;
            let photo = frame.children[0] ;
            console.log("Mouse Aaya") ;
            await this.setState({
                slider : this.sliderfunction(photo , "books")
            })
        }
        else{
            let frame = document.getElementsByClassName('about-extra-tech')[0] ;
            let photo = frame.children[0] ;
            console.log("Mouse Aaya") ;
            await this.setState({
                slider : this.sliderfunction(photo ,"tech")
            })
        }
               
    }

    stopSlideShow = async (field) => {
        console.log("Mouse Bahar")
        clearInterval(this.state.slider) ;
            await this.setState({
                slider : null 
            
        }) ; 
        if(field === "books"){
            let frame = document.getElementsByClassName('about-extra')[0] ;
            let photo = frame.children[0] ;
            photo.setAttribute('src' , def) ;
        }
        else{
            let frame = document.getElementsByClassName('about-extra-tech')[0] ;
            let photo = frame.children[0] ;
            photo.setAttribute('src' , deft) ;
        }
       
    }

    sliderfunction(photo , field) {
        if(field === "books"){
                var books = this.state.arr ;
                let index = 0 ; 
                return setInterval(function(){
                    if(index === 6){
                        index = 0 ; 
                    }
                    var image = books[index] ;
                    photo.setAttribute('src',image) ;
                    index++ ; 
            },500) ;
        }else {
            var tech = this.state.arrT ;
            let index = 0 ; 
            return setInterval(function(){
                if(index === 6){
                    index = 0 ; 
                }
                var image = tech[index] ;
                photo.setAttribute('src',image) ;
                index++ ; 
        },500) ;
        } 
    }
    render() {
        return (
            <div className="about">
                <div className='about-container' >
                    <div className="about-content">
                            <div class="about-content-helper-1"></div>
                            <div class="about-content-heading">
                                    <span class="about-content-heading-letter">A</span>
                                    <span class="about-content-heading-letter">b</span>
                                    <span class="about-content-heading-letter">o</span>
                                    <span class="about-content-heading-letter">u</span>
                                    <span class="about-content-heading-letter">t</span>
                                    &nbsp;
                                    <span class="about-content-heading-letter">m</span>
                                    <span class="about-content-heading-letter">e</span>
                                    <span class="about-content-heading-letter">,</span>
                            </div>
                            <div class="about-content-paragraph">
                                    Hey folks , I am a student of Computer Science & Engineering
                                    at Government Engineering College Bilaspur(C.G).Enrolled in 
                                    Bachelor of Engineering program , currently in 7<sup>th</sup> 
                                    &nbsp; semester.Right from the beginning of my college I had huge enthusiasm
                                    for coding & development.I have spent a lot of time learning
                                    algorithms.Along with it I learnt full stack web development.
                                    Apart from my studies , I invest a lot of my time in reading
                                    books that helps me to improve my work ethic & make me more 
                                    disciplined and consistent.I love watching and playing 
                                    cricket. 
                                    <br/>
                                    <span >Thanks for your time for going through my website.</span>
                            </div>
                            <div class="about-content-helper-2"></div>
                    </div>
                    <div className="about-decoration">
                            <div className="about-extra" 
                                onMouseEnter = {() => this.startSlideShow("books")}
                                onMouseOut = {() => this.stopSlideShow("books")}>
                                <img alt="books" src={def}/>
                            </div>
                            <div className="about-extra-tech"
                                onMouseEnter = {() => this.startSlideShow("tech")}
                                onMouseOut = {() => this.stopSlideShow("tech")}>
                                <img alt="books" src={deft}/>
                            </div> 
                    </div>
               </div>
            </div>  
          );
    }
}

export default About;

