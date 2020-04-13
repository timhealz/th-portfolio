import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'

import Selector from '../Filter'
import './style.css'


const cards = [
    {
        title: 'Bootstrapping Handwritten Digits',
        description: 'Statistics',
        image: 'bootstrapped_digits.png',
    },
    {
        title: 'Deriving Political Party Affiliation With Diffusion Maps',
        description: 'Statistics',
        image: 'diffusion_maps.png',
    },
]

const calc = (x, y) => [ -(y - window.innerHeight / 2) / 200,
                         (x - window.innerWidth / 2) / 200,
                         1.02 ]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card(args) {
    const [props, set] = useSpring(() => ({
            xys: [0, 0, 1],
            config: { mass: 10, tension: 450, friction: 40 }
        }))
    return (
        <a.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        >
          <h3 id="title">{args.title}</h3>
        </a.div>
    )
}

function Posts() {
    return (
        <div class="posts">
            {cards.map((card) => <Card {...card} />)}
        </div>
    )
}

export default Posts;
