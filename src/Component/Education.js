import React, { Component } from 'react';
import '../Css/Education.css' ;

class Education extends Component {
    render() {
        return (
            <div class="education">
                <div class="circle1">
                    <div class="circle1-detail">
                        <div>Bachelor of Engineering(CSE)</div>
                        <div>Government Engineering College,Bilaspur</div>
                        <div>2018-2022 , Current CGPA : 7.7<sup>*</sup></div>
                    </div>
                </div> 
                <div class="circle2">
                    <div class="circle2-detail">
                        <div>Class 12<sup>th</sup>(PCM)</div>
                        <div>CARE Public School,Bilaspur</div>
                        <div>2016-2017, Score : 80%</div>
                    </div>
                </div>
                <div class="circle3">
                    <div class="circle3-detail">
                        <div>Class 10<sup>th</sup></div>
                        <div>CARE Public School,Bilaspur</div>
                        <div>2014-2015, Score : 8.4</div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Education;