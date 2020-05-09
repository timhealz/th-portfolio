import React, { useState } from "react";
import { Route } from "react-router-dom";
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJava, faRProject, faDocker } from '@fortawesome/free-brands-svg-icons'

import PostCard from '../PostCard'
import Article from '../Article'
import postMetadata from './metadata'


function Posts() {
    const [posts, setPosts] = useState(postMetadata);
    const [search, setSearch] = useState("");
    const [pythonTag, setPythonTag] = useState(false);
    const [rTag, setRTag] = useState(false);
    
    return (
        <div className="posts">
        <Route exact path="/posts">
            <h1>Posts</h1>
            <div className="filter-container">
                <input className="search"
                    onChange={ e => {
                        const filterPosts = postMetadata.filter(post => {
                            return post.title.toLowerCase().includes(e.target.value.toLowerCase());
                        });
                        setPosts(filterPosts);
                        setSearch(e.target.value);
                    }}
                    type = "text"
                    value = {search}
                    placeholder = "Search"
                />
                <div className="tags">
                    <span>Tags:</span>
                    <FontAwesomeIcon
                        onClick={() => {
                            setPythonTag(!pythonTag);
                            if (!pythonTag) { 
                                const filterPosts = postMetadata.filter(post => {
                                    return post.tags.includes("python");
                                });
                                setPosts(filterPosts);
                            } else {
                                setPosts(postMetadata);
                            }
                        }}
                        icon={faPython} 
                        className={pythonTag ? "active-tag-icon" : "tag-icon"}
                    />
                    <FontAwesomeIcon
                        onClick={() => {
                            setRTag(!rTag);
                            if (!rTag) { 
                                const filterPosts = postMetadata.filter(post => {
                                    return post.tags.includes("r");
                                });
                                setPosts(filterPosts);
                            } else {
                                setPosts(postMetadata);
                            }
                        }}
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