import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import '../css/card.css'

function Card(props) {
  const [flipped, set] = useState(true)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div class="card" onClick={() => set(state => !state)}>
        <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
        <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>Hello</a.div>
    </div>
  )
}

export default Card;