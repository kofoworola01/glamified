import React from 'react';
import { useParams } from 'react-router';
import lipstick from '../../assets/images/makeup1.jpg';
import Button from '../Button';
import './description.css';

const Description = () => {

  // const location = useLocation()

  const { id } = useParams()


  console.log(id, 'iddd')

  return (
    <div className='description-Wrapper'>
      <div className='product-wrapper'>
        <div style={{ width: '400px' }}>
          <img src={lipstick} alt='' className='product-img' />
        </div>
        <div className='description-details'>
          <h1>Lipstick</h1>
          <h3>Category</h3>
          <h1>$50.00</h1>
          <p>
            Blotted Lip Sheer matte lipstick that creates the perfect popsicle
            pout! Formula is lightweight, matte and buildable for light to
            medium coverage.
          </p>
          <div>
            <Button 
              BtnText='Add to Cart' 
              fontSize='18px' 
              BtnWidth='150px'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
