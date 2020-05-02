import React from 'react'
import { Route } from "react-router-dom";
import './style.css'

import PostCard from '../PostCard'
import Article from '../Article'
import metadata from './metadata'


function Posts() {
    return (
        <div className="posts">
            <Route exact path="/posts">
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
