import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Products from '../../components/Products';

import './eyes.css'

const Eyes = () => {

  const [cartCount, setCartCount] = useState('')

  const handleCartList = (data) => {
    setCartCount(data, 'ccccc')
  }

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <div className='Wrapper'>
        <h1>EYES</h1> 
        <Products page='eye' holdCount={handleCartList} />
      </div>
      <Footer />
    </div>
  )
}

export default Eyes
