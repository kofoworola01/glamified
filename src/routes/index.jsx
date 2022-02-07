import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDescription from '../pages/ProductDescription';
import Eyes from '../pages/Eyes';

const index = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/product/:id' component={ProductDescription} />
      <Route path='/eyes' component={Eyes} />

    </BrowserRouter>
  );
};

export default index;
