import React from 'react'
import Footer from '../../components/Footer'
import Products from '../../components/Products';

import './lips.css'

const Cream = (props) => {

  return (
    <div>
      <div className='Wrapper'>
        <h1>CREAM</h1> 
        <Products page='cream' handleCartCount={props.handleCartCount} />
      </div>
      <Footer />
    </div>
  )
}

export default Cream
