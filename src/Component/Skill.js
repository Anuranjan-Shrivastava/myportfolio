import React, { Component } from 'react';
import '../Css/Skill.css' ;

class Skill extends Component {
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
           </div>
        );
    }
}

export default Skill;