import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDescription from '../pages/ProductDescription';
import Eyes from '../pages/Eyes';
import Cream from '../pages/Cream';
import Concealer from '../pages/Concealer';
import Cart from '../pages/Cart';
// import NotFound from '../pages/NotFound';
import NavBar from '../components/Navbar';
const Routes = () => {

  const [cart, setCart] = useState([])

  const handleCartCount = (product) => {
    setCart([...cart, product])
  }
    
  return (
  <>
    <BrowserRouter>
    <NavBar cart={cart}/>
      <Route exact path='/' render={() => <Home handleCartCount={handleCartCount} /> } />
      <Route path='/product/:id' render={() => <ProductDescription handleCartCount={handleCartCount}  /> }/>
      <Route path='/eyes' render={() => <Eyes handleCartCount={handleCartCount} /> } />
      <Route path='/cream' render={() => <Cream handleCartCount={handleCartCount} /> } />
      <Route path='/concealer' render={() => <Concealer handleCartCount={handleCartCount} /> } />
      <Route path='/cart' render={() => <Cart /> } />
      {/* <Route path="*" component={NotFound} /> */}
    </BrowserRouter>
    </>
  );
};

export default Routes;
