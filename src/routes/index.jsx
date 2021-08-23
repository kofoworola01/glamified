import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDescription from '../pages/ProductDescription';

const index = () => {
  return (
    <BrowserRouter>
      <Route path='/home' component={Home} />
      <Route path='/description' component={ProductDescription} />
    </BrowserRouter>
  );
};

export default index;
