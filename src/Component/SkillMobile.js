import React, { Component } from 'react';

class SkillMobile extends Component {

    componentDidMount(){
        let ele = document.getElementById(`${this.props.skill.skill}`) ;
        console.log(ele) ;
    }
    render() {
        let id = this.props.skill.skill ;
        return (
            <div id={id} style={{"width" : "100px"}}>
                
            </div>
        );
    }
}

export default SkillMobile;