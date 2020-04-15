import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

const cards = [
    {
        title: 'Bootstrapping Handwritten Digits',
        tags: ['Statistics'],
        image: 'bootstrapped_digits.png',
        pdf: 'th_bootstrapping.pdf',
        date: 'December 2019',
        description: 'Using the MNIST dataset, bootstrap sampling methods are employed to generate additional handwritten digits.'
    },
    {
        title: 'Deriving Political Party Affiliation With Diffusion Maps',
        tags: ['Statistics'],
        image: 'diffusion_maps.png',
        pdf: 'th_diffusion_maps.pdf',
        date: 'August 2019',
        description: 'Diffusion Maps are utilized to reduce the dimensionality of textual data, using it to derive the political party for members of the United States Congress based on Twitter activity.'
    },
]

function Card(props) {
    return (
        <div className="card">
        <a href={process.env.PUBLIC_URL + 'pdfs/' + props.pdf}>
            <div>
                <div className="header">
                    <h3>{props.title}</h3>
                    <p>{props.date}</p>
                </div>
                <p>{props.description}</p>
                <FontAwesomeIcon icon={faTag} />
            </div>
        </a>
        </div>
    )
}

function Posts() {
    return (
        <div className="posts">
            <h1>Posts</h1>
            {cards.map((card) => <Card {...card} />)}
        </div>
    )
}

export default Posts;
