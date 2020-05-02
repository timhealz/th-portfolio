import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './style.css';


function Navbar() {
    let path = useLocation().pathname;

    return (
        <div className="navbar">
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
