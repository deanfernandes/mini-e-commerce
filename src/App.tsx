import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import ProductsLayout from './components/ProductsLayout';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<ProductsLayout/>}>
          <Route index  element={<Products/>}/>
          <Route path=':id' element={<ProductDetails/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
