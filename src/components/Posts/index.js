import React, { useState } from "react";
import { Route } from "react-router-dom";
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPython, faJava } from '@fortawesome/free-brands-svg-icons'

import PostCard from '../PostCard'
import Article from '../Article'
import postMetadata from './metadata'


function Posts() {
    const [posts, setPosts] = useState(postMetadata);
    const [search, setSearch] = useState("");
    
    return (
        <div className="posts">
        <Route exact path="/posts">
            <input className="search"
                onChange = { e => {
                    const filterPosts = postMetadata.filter(post => {
                        return post.title.toLowerCase().includes(e.target.value.toLowerCase());
                    });
                    setPosts(filterPosts);
                    setSearch(e.target.value);
                }}
                type = "text"
                value = {search}
                placeholder = "Search Posts..."
            />
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