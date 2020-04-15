// components/App/index.js

import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'

import About from '../About'
import Posts from '../Posts';


const classes = ['icon', 'icon'];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: classes,
        };
    }
    
    handleClick(i) {
        const classesCopy = classes.slice();
        classesCopy[i] = 'icon-active'
        this.setState({classes: classesCopy});
    };
    
    render() {
        return (
            <BrowserRouter>
                <div class="navbar">
                <div class="head"><a href="/"><img src={process.env.PUBLIC_URL + 'images/headshot_small.jpg'}  alt=""/></a></div>
                <div class="icons">
                    <Link to="/posts"><i class={this.state.classes[0]} onClick={() => this.handleClick(0)}><FontAwesomeIcon icon={faNewspaper} /></i></Link>
                    <Link to="/projects"><i class={this.state.classes[1]} onClick={() => this.handleClick(1)}><FontAwesomeIcon icon={faCode} /></i></Link>
                    <a href="https://github.com/healyt22"><i class="icon"><FontAwesomeIcon icon={faGithub} /></i></a>
                    <a href="https://twitter.com/healyt22"><i class="icon"><FontAwesomeIcon icon={faTwitter} /></i></a>
                    <a href="https://linkedin.com/in/healyt22"><i class="icon"><FontAwesomeIcon icon={faLinkedin} /></i></a>
                </div>
                </div>
                <div class="content">
                    <Switch>
                        <Route exact path="/"><About /></Route>
                        <Route path="/posts"><Posts /></Route>
                    </Switch>
                </div>
                <div className="footer">
                <p>Copywright &copy; {new Date().getFullYear()} Tim Healy</p>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
