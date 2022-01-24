import React, { Component } from 'react';
import '../Css/App.css' ; 
import { Home , Navigation , About , Education , Skill , THome  , Contact , Extra , Project} from './index' ;
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom' ;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
            <div className="left">
                <Navigation/>
            </div>
            <div className="center">
              <Routes>
                <Route exact={true} path="/" element={<THome/>} />
                <Route exact={true} path="/skill"  element={<Skill/>} />
                <Route exact={true} path="/education" element={<Education/>} />
                <Route exact={true} path="/about" element={<About/>} />
                <Route exact={true} path="/contact" element={<Contact/>} />
                <Route exact={true} path="/project" element={<Project/>} />
                <Route path="*" element={<Extra/>}></Route>
              </Routes>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;

