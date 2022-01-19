import React, { Component } from 'react';
import '../Css/Navigation.css' ;
import { Link } from 'react-router-dom' ;

class Navigation extends Component {
   
    render() {
        let wd = window.innerWidth ; 
        return (
            <div className="navigation" style={{"color" : "white"}}>
                   {wd}
                <Link to="/" id="linkToTab">
                 <div className="navigation-home">
                    <span id="A">A</span><span id="S">S</span>
                 </div></Link>
                 <div className='navigation-difftab'>
                        <div>
                            <Link to="/about" id="linkToTab">
                               About 
                            </Link>
                        </div>
                        <div>
                            <Link to="/education" id="linkToTab">
                                Education
                            </Link>
                        </div>
                        <div>
                            <Link to="/skill" id="linkToTab">
                                Skills
                            </Link>
                        </div>
                        <div>
                            <Link to="/project" id="linkToTab">
                             Project
                            </Link>
                        </div>
                        <div> 
                            <Link to="/contact" id="linkToTab">
                                Contact
                            </Link>
                        </div>
                 </div>
            </div>
        );
    }
}

export default Navigation;

