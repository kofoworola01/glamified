import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Products from '../../components/Products';

import './mascara.css'

const Concealer = (props) => {

  return (
    <div>
      <Navbar cart={props.cart} />
      <div className='Wrapper'>
        <h1>CONCEALER</h1> 
        <Products page='concealer' handleCartCount={props.handleCartCount} />
      </div>
      <Footer />
    </div>
  )
}

export default Concealer
