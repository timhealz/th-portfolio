import React from 'react'
import { Link } from "react-router-dom";
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

function PostCard(props) {
    return (
        <Link to={props.path}>
        <div className="card">
            <div className="header">
                <h3>{props.title}</h3>
            </div>
            <div className="bottom">
                {/*<p>{props.description}</p>*/}
                <p>{props.date}</p>
                <FontAwesomeIcon icon={faTag} />
            </div>
        </div>
        </Link>
    )
}

export default PostCard;
