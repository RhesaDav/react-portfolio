import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App';
import Home from './Pages/Home';
import About from './Pages/About'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
