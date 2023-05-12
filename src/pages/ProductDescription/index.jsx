import React from 'react';
import Footer from '../../components/Footer';
import Description from '../../components/Description'

const ProductDescription = (props) => {
  return (
    <div>
      <Description handleCartCount={props.handleCartCount}/>
      <Footer />
    </div>
  );
};

export default ProductDescription;
