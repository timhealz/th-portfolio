import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'

function Navbar() {
    let path = useLocation().pathname;
    let navText = mapNavText(path)

    function mapNavText(location) {
        if      (path === "/")               { return "Home" } 
        else if (location === "/posts")      { return "Posts" }
        else if (location === "/projects")   { return "Projects" }
        else                                 { return "Where are you?" }
    }

    return (
        <div className="navbar">
            <Link to="/"><img src={process.env.PUBLIC_URL + 'images/headshot_small.jpg'}  alt=""/></Link>
            <div className="menu">
                <h2>{navText}</h2>
                <div className="icons">
                    <Link to="/posts"><i><FontAwesomeIcon icon={faNewspaper} className="icon" /></i></Link>
                    <Link to="/projects"><i><FontAwesomeIcon icon={faCode} className="icon" /></i></Link>
                    <a href="https://github.com/healyt22"><i><FontAwesomeIcon icon={faGithub} className="icon" /></i></a>
                    <a href="https://twitter.com/healyt22"><i><FontAwesomeIcon icon={faTwitter} className="icon" /></i></a>
                    <a href="https://linkedin.com/in/healyt22"><i><FontAwesomeIcon icon={faLinkedin} className="icon" /></i></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
