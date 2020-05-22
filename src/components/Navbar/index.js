import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './style.css';


function Navbar() {
    let path = useLocation().pathname;

    return (
        <div className="navbar">
            <Link to="/">
                <div className="home">
                    <img src={process.env.PUBLIC_URL + 'images/headshot_small.jpg'}  alt=""/>
                    <div className="name"><h2>Tim Healy</h2></div>
                </div>
            </Link>
            <div className="navbox">
                <Link to="/">
                    <h3 className={
                        path == "/" ? "active-navLink" : "navLink"
                    }>Home</h3>
                </Link>
                <Link to="/posts">
                    <h3 className={
                        path.startsWith("/posts") ? "active-navLink" : "navLink"
                    }>Posts</h3>
                </Link>
                <Link to="/projects">
                    <h3 className={
                        path.startsWith("/projects") ? "active-navLink" : "navLink"
                    }>Projects</h3>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
