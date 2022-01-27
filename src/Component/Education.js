import React, { Component } from 'react';
import '../Css/Education.css' ;

class Education extends Component {
    constructor(){
        super() ;
        this.state = {
            level : 0  
        }
    }

    moveTraveller = (dir) => {
        var truck = document.getElementsByClassName('traveller')[0] ;
        var post = truck.getBoundingClientRect() ;
        var road = document.getElementsByClassName('education1')[0] ;
        var posr = road.getBoundingClientRect() ;
        console.log(posr) ;
       
        if(dir === "r"){
            if(this.state.level === 2)return ;
            let w = posr.right - posr.left ;
            let wt = post.width ;  
            if(this.state.level === 0){
                truck.style.left = `${w/2-wt/2}px` ;
            }else{
                truck.style.left = `${w-wt}px` ;
            }
            
            this.setState((prevState) => {
                return {
                    level : prevState.level + 1 
                }
            })
           
        }else {
            if(this.state.level === 0)return ;
            let w = posr.right - posr.left ;
            let wt = post.width ;  
            if(this.state.level === 2){
                truck.style.left = `${w/2-wt/2}px` ;
            }else{
                truck.style.left = `${0}px` ;
            }
            this.setState((prevState) => {
                return {
                    level : prevState.level - 1 
                }
            })
        }
    }
    render() {
        return (
            <div className="education">
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
                <div className='education1'>
                    <div className="traveller"><i class="fas fa-truck"></i></div>
                </div>
                <div className="driver">
                    <i class="fas fa-arrow-circle-left"
                      onClick={() => this.moveTraveller("l")}></i>
                    <i class="fas fa-arrow-circle-right"
                      onClick={() => this.moveTraveller("r")}></i>  
                </div>
            </div>
        );
    }
}

export default Education;