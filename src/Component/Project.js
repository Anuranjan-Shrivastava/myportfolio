import React, { Component } from 'react';
import '../Css/project.css' ;
import p1 from '../Css/p1.png' ;
import p2 from '../Css/p2.png' ; 
import p3 from '../Css/p3.png' ; 
import p4 from '../Css/p4.png' ; 

class Project extends Component {
    constructor(){
        super() ;
        this.state = {
           projects : []
        }
    }
    UNSAFE_componentWillMount(){
        var projects = [] ;
        var project1 = {
            image : p1 , 
            name : "Portfolio",
            techStack : ["React.js"], 
            description : "This is my portfolio project where I mentioned every detail about me." , 
            code : false , 
            codeLink : "" , 
            live : true , 
            liveLink : "https://flamboyant-stonebraker-468a96.netlify.app/" ,
            info : false ,  
        }
        var project2 = {
            image : p4 , 
            name : "Chatting App",
            techStack : ["Mongodb" , "Express.js" ,"React.js" , "Node.js"], 
            description : "This is Chatting web application using which a user can chat with another user in real time using web sockets ." , 
            code : false , 
            codeLink : "" , 
            live : false , 
            liveLink : "" ,
            info : true ,  
        }
        var project3 = {
            image : p3 , 
            name : "College Manag.",
            techStack : ["Mongodb" , "Express.js" ,"React.js" , "Node.js"], 
            description : "This is Management web application using which faculty & students can easily perform their task ." , 
            code : true , 
            codeLink : "https://github.com/Anuranjan-Shrivastava/collegeManagement" , 
            live : false , 
            liveLink : "" ,
            info : false ,  
        }
        var project4 = {
            image : p2 , 
            name : "Movie App",
            techStack : ["React.js"], 
            description : "This is  movie app where user can search a movie & mark it favourite ." , 
            code : true , 
            codeLink : "https://github.com/Anuranjan-Shrivastava/movieApp" , 
            live : false , 
            liveLink : "" ,
            info : false ,  
        }
        projects.push(project1) ;
        projects.push(project2) ;
        projects.push(project3) ;
        projects.push(project4) ;
        this.setState({
            projects : projects
        })
    }
    componentDidMount(){
        var dots = document.getElementById('dots') ;
        setInterval(function(){
            let textContent = dots.textContent ; 
            if(textContent.length === 4){
                dots.textContent = "." ;
            }else {
                dots.textContent = `${textContent}.` ;
            }
        } , 500) ;
    }

    render() {
        const { projects } = this.state ;
        return (
            <div className='project'>
               <div className='projectWrapper'>
                 
                    {projects.map((project) => {
                    return (
                        <div>
                            <div className='project-image'>
                                <img src={project.image} alt="ProjectPic" />
                            </div>
                            <div className='project-name'>{project.name}</div>
                            <div className='project-techStack'>
                                <span style={{"color" : "white"}}>Tech Stack :- &nbsp;</span>
                                {project.techStack.map((stack , idx) => {
                                    console.log(idx , project.techStack.length) ;
                                    if(idx === project.techStack.length-1){
                                        return (
                                            <span className='techStackName'>{stack}.</span>
                                        )
                                    }
                                    return (
                                        <span className='techStackName'>{stack} , </span>
                                    )
                                })}
                            </div>
                            <div className='project-description'>
                                <span style={{"color" : "yellow","font-size":"20px"}}>" </span>{project.description}<span style={{"color" : "yellow","font-size":"20px"}}> "</span>                               
                            
                            </div>
                            <div className='project-navigation'>
                                {project.code && <div className='project-code'>
                                    <a  href = {project.codeLink}
                                        target="_blank"
                                        rel = "noreferrer">Code </a></div>}
                                {project.live && <div className='project-link'>
                                    
                                    <a  href = {project.liveLink}
                                        target="_blank"
                                        rel = "noreferrer">Project </a>
                                    </div>}
                                {project.info && <div className='project-info'>Will be live soon<span id="dots">.</span></div>}
                            </div>
                        </div>
                        )
                    })}
                   
                   
               </div>
              
            </div>
        );
    }
}

export default Project;
