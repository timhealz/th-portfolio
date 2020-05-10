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
    const [filteredTags, setFilteredTags] = useState([])

    const posts = [];
    postMetadata.slice().forEach((post) => {
        if (!postContainsTags(filteredTags, post.tags)) {
            return;
        }
        if (post.title.toLowerCase().includes(search.toLowerCase())) {
            posts.push(post);
        }
    });

    function handleTagClick(tag) {
        let updatedTags = filteredTags.slice();
        if (updatedTags.includes(tag)) {
            updatedTags = updatedTags.filter(e => e !== tag);
        } else {
            updatedTags.push(tag)
        }
        setFilteredTags(updatedTags);
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
                        onClick={() => { handleTagClick("python") }}
                        icon={faPython} 
                        className={filteredTags.includes("python") ? "active-tag-icon" : "tag-icon"}
                    />
                    <FontAwesomeIcon
                        onClick={() => { handleTagClick("r") }}
                        icon={faRProject} 
                        className={filteredTags.includes("r") ? "active-tag-icon" : "tag-icon"}
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