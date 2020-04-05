import React from 'react';
import Thumbnail from './thumbnail.js'; // Import the Thumbnail component
import './home.css'

function Home(props) {
  return (
    // Render a Thumbnail component
    <div>
			<Thumbnail
		  link="/twitter"
		  image="images/bootstrapped_digits.png"
		  title="Bootstrapping Handwritten Digits"
		  category="Statistics"
			/>
    </div>
  )
}

export default Home;
