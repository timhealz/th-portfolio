import React from 'react';
import './style.css';


function Home() {
    return (
        <div className="homepage">
            <h1 className="greeting">Hi, I'm Tim Healy</h1>
            <div className="intro">
                <div className="intro-cards">
                    <h2>About Me</h2>
                    <div className="intro-text">
                        <p>I'm a Data Engineer primarily working with Python, Java, and R to process Relational, NoSQL, and Hadoop-based data stores.</p>
                        <p>Recently, I finished a M.S. in Applied and Computational Mathematics from The Johns Hopkins University while working full time. I'm really proud of this achievement!</p>
                    </div>
                    <h2>This Website's Goals</h2>
                    <div className="intro-text">
                        <ul>
                            <li>Publish interesting analysis</li>
                            <li>Dump knowlege that I pick up in the form of tutorials</li>
                            <li>Learn some front-end development</li>
                            <ul>
                                <li>This website is built from scratch using React</li>
                            </ul>
                            <li>Consolidate my internet presence</li>
                        </ul>
                    </div>
                </div>
                <img className="golf" src={process.env.PUBLIC_URL + 'images/tim_golf.jpg'} alt=""/>
            </div>
        </div>
    );
}

export default Home;
