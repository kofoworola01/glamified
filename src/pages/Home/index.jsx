import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Products from '../../components/Products';
import Footer from '../../components/Footer';

const Home = () => {
  const [cartCount, setCartCount] = useState('')

  const handleCartList = (data) => {
    setCartCount(data, 'ccccc')
  }

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Banner />
      <Products holdCount={handleCartList} />
      <Footer />
    </div>
  );
};

export default Home;
