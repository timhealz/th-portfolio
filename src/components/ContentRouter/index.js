import React from 'react';
import { Route } from "react-router-dom";
import './style.css';

import About from '../About'
import Posts from '../Posts';
import Projects from '../Projects';

function ContentRouter() {
    return (
        <div className="content">
            <Route exact path="/"><About /></Route>
            <Route path="/posts"><Posts /></Route>
            <Route path="/projects"><Projects /></Route>
        </div>
    );
}

export default ContentRouter;
