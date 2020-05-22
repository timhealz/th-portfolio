import React from 'react'
import { Link } from "react-router-dom";
import './style.css'


function PostCard(props) {
    return (
        <a href={process.env.PUBLIC_URL + 'pdfs/' + props.pdf}>
        <div className="card">
            <h3 className="header">{props.title}</h3>
            <div className="bottom">
                <span className="date">{props.date}</span>
                {/*<p>{props.description}</p>*/}
            </div>
        </div>
        </a>
    )
}

export default PostCard;
