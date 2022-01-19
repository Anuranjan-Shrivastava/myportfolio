import React, { Component } from 'react';
import '../Css/Home.css' ;

class Home extends Component {
    
    UNSAFE_componentWillMount() {  
        var abcd = document.getElementsByClassName('abcd') ;
        for(let i = 0 ; i < abcd.length ; i++){
            abcd[i].addEventListener('onMouseEnter' , function() {
                console.log("Mouse Ghusa") ;
                abcd[i].classList.add("animate__animated") ;
                abcd[i].classList.add("animate__rubberBand") ;
                setTimeout(function() {
                    abcd[i].classList.remove("animate__animated") ;
                    abcd[i].classList.remove("animate__rubberBand") ;
                } , 1000) ;
            }) ;
        }
    }

    handleMouseMove = (event) => {
        console.log("Mouse Moving") ;
        var eye = document.querySelectorAll('.eye') ;
        eye.forEach(function(eye){
            let x = eye.getBoundingClientRect().left + (eye.clientWidth/2) ;
            let y = eye.getBoundingClientRect().top + (eye.clientHeight/2) ;
            let radian = Math.atan2(event.pageX - x , event.pageY - y) ;
            let rotation = (radian * (180 / Math.PI) * -1) + 270 ; 
            eye.style.transform = "rotate("+rotation+"deg)" ;
        })
    }

    handleMouseEnter = (id) => {
        var abcd = document.getElementById(id) ;
        abcd.classList.add("animate__animated") ;
        abcd.classList.add("animate__rubberBand") ;
        setTimeout(function() {
            abcd.classList.remove("animate__animated") ;
            abcd.classList.remove("animate__rubberBand") ;
        } , 1000) ;
            
    }
    
    render() {
        return (
            <div className="home" onMouseMove = {this.handleMouseMove}>
                <div className="home-main">
                    <div className="greet words word-1">
                        <span>H</span>
                        <span>E</span>
                        <span>L</span>
                        <span>L</span>
                        <span>O</span>
                        <span>,</span>
                    </div> 
                    <div className="name">
                        <span className="abcd"
                            id="I"
                            onMouseEnter={() => this.handleMouseEnter("I")}>I</span>
                        <span className="abcd"
                            id="exc"
                            onMouseEnter={() => this.handleMouseEnter("exc")}>'</span>
                        <span className="abcd"
                            id="m"
                            onMouseEnter={() => this.handleMouseEnter("m")}>m</span>
                        <span className="abcd"
                            id="comma"
                            onMouseEnter={() => this.handleMouseEnter("comma")}>,</span>
                        <br/>
                        <span className="abcd firstLetter"
                            id="A"
                            onMouseEnter={() => this.handleMouseEnter("A")}>
                                <b>A</b></span>
                        <span className="abcd"
                            id="N"
                            onMouseEnter={() => this.handleMouseEnter("N")}>n</span>
                        <span className="abcd"
                            id="U"
                            onMouseEnter={() => this.handleMouseEnter("U")}>u</span>
                        <span className="abcd"
                            id="R"
                            onMouseEnter={() => this.handleMouseEnter("R")}>r</span>
                        <span className="abcd"
                            id="A2"
                            onMouseEnter={() => this.handleMouseEnter("A2")}>a</span>
                        <span className="abcd"
                            id="N2"
                            onMouseEnter={() => this.handleMouseEnter("N2")}>n</span>
                        <span className="abcd"
                            id="J"
                            onMouseEnter={() => this.handleMouseEnter("J")}>j</span>
                        <span className="abcd"
                            id="A3"
                            onMouseEnter={() => this.handleMouseEnter("A3")}>a</span>
                        <span className="abcd"
                            id="N3"
                            onMouseEnter={() => this.handleMouseEnter("N3")}>n</span>
                        <span className="abcd"
                            id="comma2"
                            onMouseEnter={() => this.handleMouseEnter("comma2")}>,</span>
                    </div>
                    <div className="designation">
                        MERN Stack Developer .
                    </div>
                    <div className = "face">
                         <div className="eye"></div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Home;


                    // <div className="greet words word-1">
                    //     <span>H</span>
                    //     <span>E</span>
                    //     <span>L</span>
                    //     <span>L</span>
                    //     <span>O</span>
                    //     <span>,</span>
                    // </div> 
          
                    // <div className="name">
                    //     <span className="abcd"
                    //         id="I"
                    //         onMouseEnter={() => this.handleMouseEnter("I")}>I</span>
                    //     <span className="abcd"
                    //         id="exc"
                    //         onMouseEnter={() => this.handleMouseEnter("exc")}>'</span>
                    //     <span className="abcd"
                    //         id="m"
                    //         onMouseEnter={() => this.handleMouseEnter("m")}>m</span>
                    //     <span className="abcd"
                        //  id="comma"
                        //  onMouseEnter={() => this.handleMouseEnter("comma")}>,</span>
                        // <br/>
                        // <span className="abcd firstLetter"
                        //  id="A"
                        //  onMouseEnter={() => this.handleMouseEnter("A")}>
                        //     <b>A</b></span>
                        // <span className="abcd"
                        //  id="N"
                        //  onMouseEnter={() => this.handleMouseEnter("N")}>n</span>
                        // <span className="abcd"
                        //  id="U"
                        //  onMouseEnter={() => this.handleMouseEnter("U")}>u</span>
                        // <span className="abcd"
                        //  id="R"
                        //  onMouseEnter={() => this.handleMouseEnter("R")}>r</span>
                        // <span className="abcd"
                        //  id="A2"
                        //  onMouseEnter={() => this.handleMouseEnter("A2")}>a</span>
                        // <span className="abcd"
                        //  id="N2"
                        //  onMouseEnter={() => this.handleMouseEnter("N2")}>n</span>
                        // <span className="abcd"
                        //  id="J"
                        //  onMouseEnter={() => this.handleMouseEnter("J")}>j</span>
                        // <span className="abcd"
                    //      id="A3"
                    //      onMouseEnter={() => this.handleMouseEnter("A3")}>a</span>
                    //     <span className="abcd"
                    //      id="N3"
                    //      onMouseEnter={() => this.handleMouseEnter("N3")}>n</span>
                    //     <span className="abcd"
                    //      id="comma2"
                    //      onMouseEnter={() => this.handleMouseEnter("comma2")}>,</span>
                    // </div>  
                    // <div className="designation">
                    //         MERN Stack Developer 
                    // </div>
                    // <div className = "face">
                    //      <div className="eye"></div>
                    // </div> 
              