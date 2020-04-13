import React from 'react';
import './style.css';

function Intro() {
    return (
        <div class="about">
        <p class="intro">
        Hi, My name is <b>Tim Healy</b>. Welcome to my website! This where I post <b>personal projects</b> and develop my front-end chops. Recently, I finished an <b>M.S. in Applied Math</b> at Johns Hopkins University. Currently, I work as a <b>Data Engineer</b> for Verizon Media in the San Francisco Bay Area.
        </p>
        <div><img src={process.env.PUBLIC_URL + 'images/tim_golf.jpg'} alt=""/></div>
        </div>
    );
}

export default Intro;
