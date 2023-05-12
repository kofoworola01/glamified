import React from 'react'
import Footer from '../../components/Footer'
import Products from '../../components/Products';

import './eyes.css'

const Eyes = (props) => {

  return (
    <div>
      <div className='Wrapper'>
        <h1>EYES</h1> 
        <Products page='eye' handleCartCount={props.handleCartCount} />
      </div>
      <Footer />
    </div>
  )
}

export default Eyes
