import React, { Component } from 'react';
import '../Css/Navigation.css' ;
import { Link } from 'react-router-dom' ;

class Navigation extends Component {

    constructor(){
        super() ;
        this.state = {
            navigationOn : false , 
        }
    }

    handleNavigation = (clicker) => {
        let width = 1 ; 
        let mul = 1 ; 
        if(clicker === "btn"){
            if(this.state.navigationOn === false){
                let btn = document.getElementsByClassName('navigator')[0] ;
                btn.style.transform = "rotate(765deg)" ;
                let navigators = document.getElementsByClassName('smallscreen') ;
                for(let i = navigators.length-1 ; i >= 0 ; i--){
                    let right = mul*width  ;
                    navigators[i].style.right = `${right}rem` ;
                    mul++ ; 
                }
                this.setState({
                    navigationOn : true 
                })
            }else{
                let btn = document.getElementsByClassName('navigator')[0] ;
                btn.style.transform = "rotate(0deg)" ;
                let navigators = document.getElementsByClassName('smallscreen') ;
                for(let i = navigators.length-1 ; i >= 0 ; i--){
                    navigators[i].style.right = "0px" ;
                    mul++ ; 
                }
                this.setState({
                    navigationOn : false 
                })
            }
            return ;
        }
        let btn = document.getElementsByClassName('navigator')[0] ;
        btn.style.transform = "rotate(0deg)" ;
        let navigators = document.getElementsByClassName('smallscreen') ;
        for(let i = navigators.length-1 ; i >= 0 ; i--){
            navigators[i].style.right = "0px" ;
            mul++ ; 
        }
        this.setState({
            navigationOn : false 
        })

    }
   
    render() {
        let wd = window.innerWidth ; 
        return (
            <div className="navigation" style={{"color" : "white"}}>
               
                <div className="navigation-home">
                       <Link to="/" id="linkToTab"> 
                       <span id="A">A</span><span id="S">S</span>
                       </Link>
                </div>
            
                 <div className='navigation-difftab'>
                        <div className='navigator' 
                             id="plus"
                                    onClick={() => this.handleNavigation("btn")}>              
                                <i class="fas fa-plus-circle"></i>
                        </div>
                        <div className='smallscreen' id="about"
                             onClick={() => this.handleNavigation("nav")}>
                            <Link to="/about" id="linkToTab">
                               <span>About </span>
                               <i class="fas fa-info-circle"></i>
                            </Link>
                        </div>
                        <div  className='smallscreen' id="education"
                         onClick={() => this.handleNavigation("nav")}>
                            <Link to="/education" id="linkToTab">
                                <span>Education </span>
                                <i class="fas fa-user-graduate"></i>
                            </Link>
                        </div >
                        <div className='smallscreen' id="skill"
                         onClick={() => this.handleNavigation("nav")}>
                            <Link to="/skill" id="linkToTab">
                                  <span>Skills </span>
                                <i class="fas fa-tools"></i>
                            </Link>
                        </div>
                        <div className='smallscreen'  id="project"
                         onClick={() => this.handleNavigation("nav")}>
                            <Link to="/project" id="linkToTab">
                               <span>Project </span>
                             <i class="fas fa-laptop-code"></i>
                            </Link>
                        </div>
                       
                        <div className='smallscreen' id="contact"
                         onClick={() => this.handleNavigation("nav")}> 
                            <Link to="/contact" id="linkToTab">
                                   <span>Contact </span>
                                <i class="fas fa-envelope-square"></i>
                            </Link>
                        </div>
                        
                 </div>
                
                 
            </div>
        );
    }
}

export default Navigation;

{/*
<i class="fas fa-envelope-square"></i>
<i class="fas fa-tools"></i> 
<i class="fas fa-info-circle"></i>
<i class="fas fa-laptop-code"></i>*/}
