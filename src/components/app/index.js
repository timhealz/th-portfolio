// components/App/index.js

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';

import Header from '../Header'
import Intro from '../Intro'
import Posts from '../Posts';


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Intro />
        <Route exact path="/" component={Posts} />
    </BrowserRouter>
  );
}

export default App;
