import React, { useState } from "react";
import { Route } from "react-router-dom";
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJava, faRProject, faDocker } from '@fortawesome/free-brands-svg-icons'

import PostCard from '../PostCard'
import Article from '../Article'
import postMetadata from './metadata'


function Posts() {
    const [search, setSearch] = useState("");
    const [pythonTag, setPythonTag] = useState(false);
    const [rTag, setRTag] = useState(false);
    console.log(search, pythonTag, rTag)

    let searchPosts = postMetadata.slice().filter(post => {
        return (
            post.title.toLowerCase().includes(search.toLowerCase())
        )
    });

    let posts = searchPosts.filter(post => {
        return (
            pythonTag ? post.tags.includes("python") : true &&
            rTag ? post.tags.includes("r") : true
        )
    })

    return (
        <div className="posts">
        <Route exact path="/posts">
            <h1>Posts</h1>
            <div className="filter-container">
                <input className="search"
                    onChange={ e => { setSearch(e.target.value); }}
                    type="text"
                    value={search}
                    placeholder="Search"
                />
                <div className="tags">
                    <span>Tags:</span>
                    <FontAwesomeIcon
                        onClick={() => { setPythonTag(!pythonTag) }}
                        icon={faPython} 
                        className={pythonTag ? "active-tag-icon" : "tag-icon"}
                    />
                    <FontAwesomeIcon
                        onClick={() => { setRTag(!rTag) }}
                        icon={faRProject} 
                        className={rTag ? "active-tag-icon" : "tag-icon"}
                    />
                </div>
            </div>
            <div className="cards">
                { posts.map((post) => <PostCard {... post} /> )}
            </div>
        </Route>
        {   postMetadata.map( (postData) =>
                <Route path={postData.path}>
                    <Article markdown={postData.markdown} />
                </Route> ) }
        </div>
    )
}

export default Posts;