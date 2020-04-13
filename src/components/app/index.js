// components/App/index.js

import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faIdBadge, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'

import About from '../About'
import Posts from '../Posts';


function App() {
    return (
        <BrowserRouter>
            <div class="navbar">
              <div class="head"><a href="/"><img src={process.env.PUBLIC_URL + 'images/headshot_small.jpg'}  alt=""/></a></div>
              <div>
                  <Link to="/posts">
                  <i class="icon"><FontAwesomeIcon icon={faNewspaper} /></i>
                  </Link>
                  <Link to="/about">
                  <i class="icon"><FontAwesomeIcon icon={faIdBadge} /></i>
                  </Link>
                  <i class="icon"><a href="https://github.com/healyt22"><FontAwesomeIcon icon={faGithub} /></a></i>
                  <i class="icon"><a href="https://twitter.com/healyt22"><FontAwesomeIcon icon={faTwitter} /></a></i>
                  <i class="icon"><a href="https://linkedin.com/in/healyt22"><FontAwesomeIcon icon={faLinkedin} /></a></i>
                  <i class="icon"><a><FontAwesomeIcon icon={faEnvelope} /></a></i>
              </div>
            </div>
            <div class="content">
              <Switch>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/posts">
                      <Posts />
                  </Route>
              </Switch>
            </div>
        </BrowserRouter>
    );
  }

export default App;
