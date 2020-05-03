import React from 'react';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

function IconLinks() {
    return (
        <div className="icons">
            <a href="https://github.com/timhealz">
                <FontAwesomeIcon icon={faGithub}
                    className="icon" />
            </a>
            <a href="https://stackoverflow.com/users/7214439/healyt22">
                <FontAwesomeIcon icon={faStackOverflow}
                    className="icon" />
            </a>
            <a href="https://twitter.com/timhealz">
                <FontAwesomeIcon icon={faTwitter}
                    className="icon" />
            </a>
            <a href="https://linkedin.com/in/healyt22">
                <FontAwesomeIcon icon={faLinkedin}
                    className="icon" />
            </a>
        </div>
    );
}

export default IconLinks;
