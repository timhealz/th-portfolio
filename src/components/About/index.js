import React from 'react';
import './style.css';

function Intro() {
    return (
        <div class="about">
            <div class="intro">
                <h1>Tim Healy</h1>
                <p>Hi, welcome to my website! This where I post <b>personal projects</b> and develop my front-end chops. Recently, I finished an <b>M.S. in Applied Math</b> at Johns Hopkins University. Currently, I work as a <b>Data Engineer</b> for Verizon Media in the San Francisco Bay Area.</p>
            </div>
            <div class="spacer" />
            <div class="pic">
                <img src={process.env.PUBLIC_URL + 'images/tim_golf.jpg'} alt=""/>
            </div>
        </div>
    );
}

export default Intro;
