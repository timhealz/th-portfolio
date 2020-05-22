import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from './util/scrollToTop'
import * as serviceWorker from './serviceWorker';

import Navbar from './components/Navbar'
import ContentRouter from './components/ContentRouter'
import Footer from './components/Footer'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <ScrollToTop />
            <Navbar />
            <ContentRouter />
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
