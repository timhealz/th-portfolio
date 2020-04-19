import React from 'react'
import { Link, Switch, Route } from "react-router-dom";
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

import Article from '../Article'

function Card(props) {
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

const bootstrap = {
        title: 'Bootstrapping Handwritten Digits',
        path: '/posts/bootstrapping-handwritten-digits',
        tags: ['Statistics'],
        date: 'December 2019',
        description: 'Using the MNIST dataset, bootstrap sampling methods are employed to generate additional handwritten digits.'
    }
const diffmap = {
        title: 'Deriving Political Affiliation With Diffusion Maps',
        path: '/posts/diffusion-maps',
        tags: ['Statistics'],
        date: 'August 2019',
        description: 'Diffusion Maps are utilized to reduce the dimensionality of textual data, using it to derive the political party for members of the United States Congress based on Twitter activity.'
    }

function Posts() {
    return (
        <div>
            <Switch>
                <Route exact path="/posts">
                    <div className="posts">
                        <Card {... bootstrap} />
                        <Card {... diffmap} />
                    </div>
                </Route>
                <Route path="/posts/bootstrapping-handwritten-digits">
                    <Article markdown="bootstrapping-handwritten-digits.md" />
                </Route>
                <Route path="/posts/diffusion-maps">
                    <Article markdown="diffusion-maps.md" />
                </Route>
            </Switch>
        </div>
    )
}

export default Posts;
