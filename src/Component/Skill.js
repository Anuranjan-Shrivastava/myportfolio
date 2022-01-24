import React, { Component } from 'react';
import '../Css/Skill.css' ;

class Skill extends Component {
    constructor(){
        super() ;
        this.state = {
              language : [
                  {
                      skill : "C" , 
                      value : 80
                  } , 
                  {
                      skill : "C++",
                      value : 80 
                  },
                  {
                      skill : "Javascript" , 
                      value : 70
                  } 
              ] ,
              web : [
                {
                    skill : "HTML" , 
                    value : 80
                } ,
                {
                    skill : "React.js" , 
                    value : 80
                },  
                {
                    skill : "CSS",
                    value : 70 
                },
                {
                    skill : "Javascript" , 
                    value : 70
                } , 
                {
                    skill : "Node.js",
                    value : 70 
                }, 
                {
                    skill : "Express.js",
                    value : 70 
                }
              ] , 
              db : [
                  {
                      skill : "Mongodb" , 
                      value : 75
                  }
              ] , 
              cs : [
                {
                    skill : "Data Structure" , 
                    value : 80
                },
                {
                    skill : "Algorithms" , 
                    value : 80
                },
                {
                    skill : "OOP" , 
                    value : 70
                }
              ] , 
              framework : [
                {
                    skill : "React.js" , 
                    value : 80
                } , 
                {
                    skill : "Express.js",
                    value : 70 
                }
              ] , 
              arr : ["language","framework","db","web","cs"] ,
        }
    }
    componentDidMount = () => {
        let arr = [2,4,6] ; 
        let skillArr = this.state.language ;
        for(let i = 1 ; i <=6 ; i++){
            let element = document.getElementById(`${i}`) ;
            element.style.width ="0px" ;
            element.textContent = "" ;
        }
        for(let i = 0 ; i < arr.length ; i++){
            let element = document.getElementById(`${arr[i]}`) ;
            element.style.width = `${skillArr[i].value}%` ;
            element.textContent = `${skillArr[i].skill}`
        }
        let elementClass = this.state.arr[0] ;
        document.getElementsByClassName(elementClass)[0].style.backgroundColor = "red" ;
    }
   
    handleChangeSkillGraph = async  (name , idx) => {
        let arr  ; 
        let skillArr ; 
        if(name === "lang"){
            arr = [2,4,6] ; 
            skillArr = this.state.language ;
        }
        if(name === "web"){
            arr = [1,2,3,4,5,6] ; 
            skillArr = this.state.web ;
        }
        if(name === "cs"){
            arr = [2,4,6] ;
            skillArr = this.state.cs ;
        } 
        if(name === "frame"){
            arr = [3,5] ;
            skillArr = this.state.framework ;
        } 
        if(name === "db"){
            arr = [4] ; 
            skillArr = this.state.db ; 
        }
        let classes = this.state.arr ; 
        for(let i = 0 ; i < 5 ; i++){
            let elementClass = classes[i] ;
            console.log(elementClass) ;
            document.getElementsByClassName(elementClass)[0].style.backgroundColor = "transparent" ;
            if(i === idx)document.getElementsByClassName(elementClass)[0].style.backgroundColor = "red" ;
        }
        for(let i = 1 ; i <=6 ; i++){
            let element = document.getElementById(`${i}`) ;
            element.style.width ="0px" ;
            element.textContent = "" ;
        }
        setTimeout(function(){
            for(let i = 0 ; i < arr.length ; i++){
                let element = document.getElementById(`${arr[i]}`) ;
                element.style.width = `${skillArr[i].value}%` ;
                element.textContent = `${skillArr[i].skill}` ;
            }
        } , 500) ;
        
    }
    render() {
        return (
            <div className="skill">
                <div className="smallSkill">
                    <div id="skillBox1">
                        <div className="skillBoxHelper skillBoxHelperOne">
                            <div id="one20"></div>
                            <div id="one40"></div>
                            <div id="one60"></div>
                            <div id="one80"></div>
                            <div id="one100"></div>
                        </div>
                    
                        <div className="skillContainer"></div>
                        <div className="skillContainer leftSideContainer">
                            <div id="C2">C++</div>
                        </div>
                    
                        <div className="skillContainer"></div>
                        <div className="skillContainer leftSideContainer">
                            <div id="HTML">HTML</div>
                        </div>
                    
                        <div className="skillContainer"></div>
                        <div className="skillContainer leftSideContainer">
                            <div id="Javascript">Javascript</div>
                        </div>
                    
                        <div className="skillContainer"></div>
                        <div className="skillContainer leftSideContainer">
                            <div id="Expressjs">Express.js</div>
                        </div>
                    
                        <div className="skillContainer"></div>
                        <div className="skillContainer leftSideContainer">
                            <div id="MongoDB">MongoDB</div>
                        </div>
                    
                        <div className="skillContainer"></div>
                        <div className="skillContainer"></div>
                        
                    </div>
                    <div id="skillBox2">
                        <div className="skillBoxHelper">
                            <div id="two20"></div>
                            <div id="two40"></div>
                            <div id="two60"></div>
                            <div id="two80"></div>
                            <div id="two100"></div>
                        </div>
                        <div className="skillContainer">
                            <div id="C">C</div>
                        </div>
                        <div className="skillContainer"></div>
                        <div className="skillContainer">
                            <div id="CSS">CSS</div>
                        </div>
                        <div className="skillContainer"></div>
                        <div className="skillContainer">
                            <div id="Nodejs">Node.js</div>
                        </div>
                        <div className="skillContainer"></div>
                        <div className="skillContainer">
                            <div id="Reactjs">React.js</div>
                        </div>
                        <div className="skillContainer"></div>
                        <div className="skillContainer">
                            <div id="DataStructure">Data Structure</div>
                        </div>
                        <div className="skillContainer"></div>
                    
                        <div className="skillContainer">
                            <div id="Algorithm">Algorithm</div>
                        </div>
                        <div className="skillContainer"></div>
                    </div>
                </div>
                <div className='mobileSkill'>
                    <div className='graph'>
                         <div className='percentage'>
                             <div className='mstwenty'></div>
                             <div className='msforty'></div>
                             <div className='mssixty'></div>
                             <div className='mseighty'></div>
                             <div className='mshundred'></div>
                         </div>
                         <div className='graphBars'>
                             <div className="msone" id="1"></div>
                             <div className="mstwo" id="2"></div>
                             <div className="msthree" id="3"></div>
                             <div className="msfour" id="4"></div>
                             <div className="msfive" id="5"></div>
                             <div className="mssix" id="6"></div>
                         </div>
                    </div>
                    <div className='checkBoxes'>
                       <div className='checkBoxes1'>
                            <div className='language'
                                 onClick={() => this.handleChangeSkillGraph("lang" , 0)}>Language</div>
                            <div className='framework'
                                 onClick={() => this.handleChangeSkillGraph("frame" , 1)}>Framework</div>
                       </div>
                       <div className='checkBoxes2'>
                            <div className='db'
                                 onClick={() => this.handleChangeSkillGraph("db" , 2)}>DB</div>
                            <div className='web'
                                 onClick={() => this.handleChangeSkillGraph("web" , 3)}>WEB</div>
                            <div className='cs'
                                 onClick={() => this.handleChangeSkillGraph("cs" , 4)}>CS</div>
                       </div>
                    </div>
                </div>
           </div>
        );
    }
}

export default Skill;

