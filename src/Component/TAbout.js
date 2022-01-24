import React, { Component } from 'react';
import '../Css/TAbout.css' ;

class TAbout extends Component {
    render() {
        return (
            <div className='tabout'>
               <div className='tabout-content'>
                    <div className="tabout-detail">
                        <div class="tabout-content-helper-1"></div>
                        <div class="tabout-content-heading">
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
                        <div class="tabout-content-paragraph">
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
                        <div class="tabout-content-helper-2">

                        </div>
                    </div>
                    <div className="tabout-picture">

                    </div>
               </div>
            </div>
        );
    }
}

export default TAbout;

  