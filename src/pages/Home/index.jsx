import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Products from '../../components/Products';
import Footer from '../../components/Footer';

const Home = (props) => {
  // const [cartCount, setCartCount] = useState('')

  // const handleCartList = (data) => {
  //   setCartCount(data, 'ccccc')
  // }
  
  return (
    <div>
      <Navbar cart={props.cart} />
      <Banner />
      <Products handleCartCount={props.handleCartCount} />
      <Footer />
    </div>
  );
};

export default Home;
