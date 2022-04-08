import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDescription from '../pages/ProductDescription';
import Eyes from '../pages/Eyes';
import Cream from '../pages/Cream';
import Concealer from '../pages/Concealer';
import Cart from '../pages/Cart';
// import NotFound from '../pages/NotFound';

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
      <Route path='/cream' render={() => <Cream handleCartCount={handleCartCount} cart={cart}/> } />
      <Route path='/concealer' render={() => <Concealer handleCartCount={handleCartCount} cart={cart}/> } />
      <Route path='/cart' render={() => <Cart cart={cart}/> } />
      {/* <Route path="*" component={NotFound} /> */}
    </BrowserRouter>
  );
};

export default Routes;
