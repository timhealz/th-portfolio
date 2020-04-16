import React, { useState } from 'react';
import { Switch, Route, Link, useLocation } from "react-router-dom";
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'

import About from '../About'
import Posts from '../Posts';

function App() {
    let path = useLocation().pathname;
    let navText = mapNavText(path)

    function mapNavText(location) {
        if      (path == "/")               { return "Home" } 
        else if (location == "/posts")      { return "Posts" }
        else if (location == "/projects")   { return "Projects" }
        else                                { return "Where are you?" }
    }

    return (
        <div>
            <div className="navbar">
                <Link to="/"><img src={process.env.PUBLIC_URL + 'images/headshot_small.jpg'}  alt=""/></Link>
                <div className="menu">
                    <div className="navtext"><h2>{navText}</h2></div>
                    <div className="icons">
                        <Link to="/posts"><i><FontAwesomeIcon icon={faNewspaper} className="icon" /></i></Link>
                        <Link to="/projects"><i><FontAwesomeIcon icon={faCode} className="icon" /></i></Link>
                        <a href="https://github.com/healyt22"><i><FontAwesomeIcon icon={faGithub} className="icon" /></i></a>
                        <a href="https://twitter.com/healyt22"><i><FontAwesomeIcon icon={faTwitter} className="icon" /></i></a>
                        <a href="https://linkedin.com/in/healyt22"><i><FontAwesomeIcon icon={faLinkedin} className="icon" /></i></a>
                    </div>
                </div>
            </div>
            <div className="content">
                <Switch>
                    <Route exact path="/"><About /></Route>
                    <Route path="/posts"><Posts /></Route>
                </Switch>
            </div>
            <div className="footer">
                <p>Copyright &copy; {new Date().getFullYear()} Tim Healy</p>
            </div>
        </div>
    );
}

export default App;
