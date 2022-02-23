import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDescription from '../pages/ProductDescription';
import Eyes from '../pages/Eyes';

const Routes = () => {

  const [cart, setCart] = useState([])

  const handleCartCount = (product) => {
    setCart([...cart, product])
  }
    
  return (
    <BrowserRouter>
      <Route exact path='/' render={() => <Home handleCartCount={handleCartCount} cart={cart} /> } />
      <Route path='/product/:id' component={ProductDescription} />
      <Route path='/eyes' render={() => <Eyes handleCartCount={handleCartCount} cart={cart}/> } />
    </BrowserRouter>
  );
};

export default Routes;
