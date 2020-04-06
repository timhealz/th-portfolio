// components/app/index.js

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import THGrid from './js/grid.js';
import './app.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path="/" component={THGrid} />
    </div>
    </BrowserRouter>
  );
}

export default App;
