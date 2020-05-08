import React from 'react'
import { Link } from "react-router-dom";
import './style.css'


function PostCard(props) {
    return (
        <Link to={props.path}>
        <div className="card">
            <div className="header">
                <h2>{props.title}</h2>
                <p>{props.date}</p>
            </div>
            <div className="bottom">
                {/*<p>{props.description}</p>*/}
            </div>
        </div>
        </Link>
    )
}

export default PostCard;
