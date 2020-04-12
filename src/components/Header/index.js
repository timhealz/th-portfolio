import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './style.css';

function Header() {
  return (
    <div class="header">
      <div class="head"><a href="/"><img src={process.env.PUBLIC_URL + 'images/headshot_small.jpg'} /></a></div>
      <div>
          <i class="icon"><a href="https://github.com/healyt22"><FontAwesomeIcon icon={faGithub} /></a></i>
          <i class="icon"><a href="https://twitter.com/healyt22"><FontAwesomeIcon icon={faTwitter} /></a></i>
          <i class="icon"><a href="https://linkedin.com/in/healyt22"><FontAwesomeIcon icon={faLinkedin} /></a></i>
      </div>
    </div>
  );
}

export default Header;
