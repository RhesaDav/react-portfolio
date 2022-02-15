import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

import App from './App';
import Home from './Pages/Home';
import About from './Pages/About'
import Contact from './Pages/Contact'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
