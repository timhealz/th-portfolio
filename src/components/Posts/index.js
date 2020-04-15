import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

const cards = [
    {
        title: 'Bootstrapping Handwritten Digits',
        tags: ['Statistics'],
        image: 'bootstrapped_digits.png',
        date: 'December 19, 2019',
        description: 'Using the MNIST dataset, bootstrap sampling methods are employed to generate additional handwritten digits.'
    },
    {
        title: 'Deriving Political Party Affiliation With Diffusion Maps',
        tags: ['Statistics'],
        image: 'diffusion_maps.png',
        date: 'August 3, 2019',
        description: 'Diffusion Maps are utilized to reduce the dimensionality of textual data, using it to derive the political party for members of the United States Congress based on Twitter activity.'
    },
]

function Card(props) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="header">
                    <h3>{props.title}</h3>
                    <p>{props.date}</p>
                </div>
                <p>{props.description}</p>
                <FontAwesomeIcon icon={faTag} />
            </div>
        </div>
    )
}

function Posts() {
    return (
        <div class="posts">
            <h1>Posts</h1>
            {cards.map((card) => <Card {...card} />)}
        </div>
    )
}

export default Posts;
