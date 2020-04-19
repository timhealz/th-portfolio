import React from 'react';
import { Route } from "react-router-dom";
import './style.css';

import Navbar from '../Navbar'
import About from '../About'
import Posts from '../Posts';

function App() {
    return (
        <div>
            <Navbar />
            <div className="content">
                <Route exact path="/"><About /></Route>
                <Route path="/posts"><Posts /></Route>
            </div>
            <div className="footer">
                <p>Copyright &copy; {new Date().getFullYear()} Tim Healy</p>
            </div>
        </div>
    );
}

export default App;
