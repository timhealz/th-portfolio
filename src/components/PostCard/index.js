import React from 'react'
import { Link } from "react-router-dom";
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

function PostCard(props) {
    return (
        <Link to={props.path}>
        <div className="card">
            <div>
                <div className="header">
                    <h3>{props.title}</h3>
                    <p>{props.date}</p>
                </div>
                <p>{props.description}</p>
                <FontAwesomeIcon icon={faTag} />
            </div>
        </div>
        </Link>
    )
}

export default PostCard;
