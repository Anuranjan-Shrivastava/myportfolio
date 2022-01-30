import React, { Component } from 'react';
import { Link } from 'react-router-dom' ;
import '../Css/extra.css' ;

class Extra extends Component {

    componentDidMount(){
        var button = document.getElementsByClassName('goback')[0] ;
      
        var color = ["green" , "orange","red" , "violet" , "blue"] ;
        let idx = 0 ; 
        setInterval(function(){
               if(idx === color.length){
                   idx = 0 ; 
               }
               button.style.color = `${color[idx]}` ;
               idx++ ; 
        } , 500) ;
    }
    render() {
        return (
            <div className='extra'>
                <div>
                    Wrong url &nbsp; 
                    <Link to="/" id="linky">
                        <span className='goback'>Go Back</span>
                    </Link>
               </div>
            </div>
        );
    }
}

export default Extra;