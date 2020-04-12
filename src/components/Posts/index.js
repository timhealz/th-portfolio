import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'

import Selector from '../Filter'
import './style.css'


const cards = [
    {
        title: 'Bootstrapping Handwritten Digits',
        description: 'Statistics',
        image: 'bootstrapped_digits.png',
        maxWidth: '800px',
        maxHeight: '404px',
    },
    {
        title: 'Deriving Political Party Affilication With Diffusion Maps',
        description: 'Statistics',
        image: 'diffusion_maps.png',
        maxWidth: '500px',
        maxHeight: '484px',
    },
]

function Card(props) {
    return (
        <div class="card">
          <h3 id="title">{props.title}</h3>
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
