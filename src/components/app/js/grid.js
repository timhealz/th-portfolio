import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'

import Selector from './selector.js'
import cards from './cards.js'
import '../css/grid.css'

function Card(props) {
    const [flipped, set] = useState(true)
    const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <div 
            class="card"
            onClick={() => set(state => !state)}
            style={{ 
                maxWidth: props.maxWidth,
                maxHeight: props.maxHeight
            }} 
        >
            <a.div
                class="c front" 
                style={{ 
                    opacity,
                    transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                    backgroundImage: `url(${process.env.PUBLIC_URL + 'images/' + props.image})`,
                    maxWidth: props.maxWidth,
                    maxHeight: props.maxHeight
                }} 
            />
            <a.div
                class="c back"
                style={{
                    opacity: opacity.interpolate(o => 1 - o),
                    transform,
                    maxWidth: props.maxWidth,
                    maxHeight: props.maxHeight
                }}
            >{props.title}
            </a.div>
        </div>
    )
}

function Grid() {
    return (
        <div class="grid">
            {cards.map((card) => <Card {...card} />)}
        </div>
    )
}

export default Grid;