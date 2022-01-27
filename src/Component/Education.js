import React, { Component } from 'react';
import '../Css/Education.css' ;

class Education extends Component {
    constructor(){
        super() ;
        this.state = {
            level : 0  
        }
    }
    componentDidMount = () => {
        window.addEventListener('resize' , () => {
            var truck = document.getElementsByClassName('traveller')[0] ;
            truck.style.left = "0px" ;
            this.setState({
                level : 0 
            }) ; 
            truck.style.transform = "rotateY(0deg)" ;
        })
    }

    moveTraveller = async (dir) => {
        var truck = document.getElementsByClassName('traveller')[0] ;
        var post = truck.getBoundingClientRect() ;
        var road = document.getElementsByClassName('education1')[0] ;
        var posr = road.getBoundingClientRect() ;
     
        
        if(dir === "r"){
            if(this.state.level === 2)return ;
            let w = posr.right - posr.left ;
            let wt = post.width ;  
            if(this.state.level === 0){
                truck.style.left = `${w/2-wt/2}px` ;
            }else{
                truck.style.left = `${w-wt}px` ;
            }
            
            await this.setState((prevState) => {
                return {
                    level : prevState.level + 1 
                }
            }) ;
            if(this.state.level === 2){
                truck.style.transform = "rotateY(180deg)" ;
            }
           
        }else {
            if(this.state.level === 0)return ;
            let w = posr.right - posr.left ;
            let wt = post.width ;  
            if(this.state.level === 2){
                truck.style.left = `${w/2-wt/2}px` ;
            }else{
                truck.style.left = `${0}px` ;
            }
            await this.setState((prevState) => {
                return {
                    level : prevState.level - 1 
                }
            }) ; 
            if(this.state.level === 0){
                truck.style.transform = "rotateY(0deg)" ;
            }
        }
    }
    render() {
        const {level} = this.state ; 
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
                    {level === 0 && <div className='educard'>
                           Class 10<sup>th</sup><br/>
                           C.A.R.E Public School<br/>
                           (2014-2015)<br/>
                           CGPA :- 8.4
                    </div>}
                    {level === 1 && <div className='educard'>
                           Class 12<sup>th</sup><br/>
                           C.A.R.E Public School<br/>
                           (2016-2017)<br/>
                           Score :- 80%
                    </div>}
                   {level === 2 &&  <div className='educard'>
                           Bachelor of Engineering<br/>
                           GEC Bilaspur<br/>
                           (2018-2022)<br/>
                           CGPA :- 7.7*
                    </div>}
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