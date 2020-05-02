import React from 'react';
import { Route } from "react-router-dom";
import './style.css';

import Navbar from '../Navbar'
import ContentRouter from '../ContentRouter'
import Footer from '../Footer'

function App() {
    return (
        <div>
            <Navbar />
            <ContentRouter />
            <Footer />
        </div>
    );
}

export default App;
