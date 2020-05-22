import React, { useState } from "react";
import { Route } from "react-router-dom";
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faRProject } from '@fortawesome/free-brands-svg-icons'
import { faRobot, faChartArea, faMountain } from '@fortawesome/free-solid-svg-icons'

import PostCard from '../PostCard'
import Article from '../Article'
import postMetadata from './metadata'


function Posts() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterTags, setFilterTags] = useState([])

    const posts = [];
    postMetadata.slice().forEach((post) => {
        if (!postContainsTags(filterTags, post.tags)) {
            return;
        }
        if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            posts.push(post);
        }
    });

    function handleTagClick(tag) {
        let updatedTags = filterTags.slice();
        if (updatedTags.includes(tag)) {
            updatedTags = updatedTags.filter(e => e !== tag);
        } else {
            updatedTags.push(tag)
        }
        setFilterTags(updatedTags);
    }

    function postContainsTags(tagQuery, postTags){
        for(var i = 0; i < tagQuery.length; i++){
          if(postTags.indexOf(tagQuery[i]) === -1)
             return false;
        }
        return true;
      }

    return (
        <div className="posts">
        <Route exact path="/posts">
            <div className="tags-container">
                <div className="tags-helmet">
                    <h3>Tags:</h3>
                </div>
                <div className="tags">
                    <div className="tag" onClick={() => { handleTagClick("python") }} >
                        <FontAwesomeIcon icon={faPython} 
                            className={filterTags.includes("python") ? "active-tag-icon" : "tag-icon"}/>
                        <span>Python</span>
                    </div>
                    <div className="tag" onClick={() => { handleTagClick("r") }} >
                        <FontAwesomeIcon icon={faRProject} 
                            className={filterTags.includes("r") ? "active-tag-icon" : "tag-icon"} />
                        <span>R</span>
                    </div>
                    <div className="tag" onClick={() => { handleTagClick("data-mining") }} >
                        <FontAwesomeIcon icon={faMountain} 
                            className={filterTags.includes("data-mining") ? "active-tag-icon" : "tag-icon"} />
                        <span>Data Mining</span>
                    </div>
                    <div className="tag" onClick={() => { handleTagClick("statistics") }} >
                        <FontAwesomeIcon icon={faChartArea} 
                            className={filterTags.includes("statistics") ? "active-tag-icon" : "tag-icon"} />
                        <span>Statistics</span>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="posts-helmet">
                    <h1>Posts</h1>
                    <input className="search"
                        onChange={ e => { setSearchTerm(e.target.value); }}
                        type="text"
                        value={searchTerm}
                        placeholder="Search"
                    />
                </div>
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