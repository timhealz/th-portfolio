import React from 'react'
import { Route } from "react-router-dom";
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJava } from '@fortawesome/free-brands-svg-icons'

import PostCard from '../PostCard'
import Article from '../Article'
import metadata from './metadata'


function Posts() {
    return (
        <div className="posts">
        <Route exact path="/posts">
            <div className="tags">
                <div className="tag">
                    <FontAwesomeIcon icon={faPython}
                        className="tag-icon"/>
                    Python
                </div>
                <div className="tag">
                    <FontAwesomeIcon icon={faJava}
                        className="tag-icon"/>
                    Java
                </div>
            </div>
            <div className="cards">
                { metadata.map((postData) => <PostCard {... postData} /> )}
            </div>
        </Route>
        {   metadata.map( (postData) =>
                <Route path={postData.path}>
                    <Article markdown={postData.markdown} />
                </Route> ) }
        </div>

    )
}

export default Posts;
