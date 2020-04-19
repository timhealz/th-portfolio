import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'

function Navbar() {
    let path = useLocation().pathname;
    let navText = mapNavText()

    function mapNavText(location) {
        if      (path === "/")                  { return "Home" }
        else if (path.startsWith("/posts"))     { return "Posts" }
        else if (path.startsWith("/projects"))  { return "Projects" }
        else                                    { return "Where are you?" }
    }

    return (
        <div className="navbar">
            <Link to="/"><img src={process.env.PUBLIC_URL + 'images/headshot_small.jpg'}  alt="Home"/></Link>
            <div className="menu">
                <div className="navbox">
                    <h3 className="navtext">{navText}</h3>
                </div>
                <div className="icons">
                    <Link to="/posts">
                        <FontAwesomeIcon icon={faNewspaper} className={path.startsWith("/posts") ? "active-icon" : "icon"} />
                    </Link>
                    <Link to="/projects">
                        <FontAwesomeIcon icon={faCode} className={path.startsWith("/projects") ? "active-icon" : "icon"} />
                    </Link>
                    <a href="https://github.com/healyt22">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
                    <a href="https://twitter.com/healyt22">
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
                    </a>
                    <a href="https://linkedin.com/in/healyt22">
                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
