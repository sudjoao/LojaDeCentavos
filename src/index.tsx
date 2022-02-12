import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/home';
import ProductPage from './pages/products';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="products" element={<ProductPage />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
