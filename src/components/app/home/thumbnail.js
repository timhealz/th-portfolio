import React from 'react';
import {Link} from 'react-router-dom';
import './thumbnail.css'

function Thumbnail(props) {
  return (
    <div class="projects">
      <Link to={props.link}>
        <img class="project-image" src={process.env.PUBLIC_URL + props.image} alt="Project Image"/>
        <div class="project-title">{props.title}</div>
        <div class="project-category">{props.category}</div>
      </Link>
    </div>
  )
}

export default Thumbnail;
