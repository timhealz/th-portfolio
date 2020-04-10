// components/app/index.js

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Grid from './js/grid.js';
import './css/app.css';

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Grid} />
    </BrowserRouter>
  );
}

export default App;
