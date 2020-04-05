import React from 'react';
import {Link} from 'react-router-dom';
import './thumbnail.css'

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div>
          <img  class="project-image" src={process.env.PUBLIC_URL + props.image} alt="Project Image"/>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
            </Link>
    </div>
  )
}

export default Thumbnail;
