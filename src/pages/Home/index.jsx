import React from 'react';
import Banner from '../../components/Banner';
import Products from '../../components/Products';
import Footer from '../../components/Footer';

const Home = (props) => {
  return (
    <div>
      <Banner />
      <Products handleCartCount={props.handleCartCount} />
      <Footer />
    </div>
  );
};

export default Home;
