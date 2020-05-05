import React from 'react'
import { Route } from "react-router-dom";
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'


function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <FontAwesomeIcon icon={faTools} className="construction"/>
            <p>Under Construction</p>
        </div>
    )
}

export default Projects;
