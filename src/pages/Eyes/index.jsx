import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Products from '../../components/Products';

import './eyes.css'

const Eyes = (props) => {

  return (
    <div>
      <Navbar cart={props.cart} />
      <div className='Wrapper'>
        <h1>EYES</h1> 
        <Products page='eye' handleCartCount={props.handleCartCount} />
      </div>
      <Footer />
    </div>
  )
}

export default Eyes
