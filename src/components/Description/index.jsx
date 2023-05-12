import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getSingleProduct } from '../../api';
import Button from '../Button';
import './description.css';

const Description = (props) => {

  const { id } = useParams()
  const [product, setProduct] = useState([])

  const { refetch } = useQuery(
    'getSingleProduct',
    () => getSingleProduct(id),
    {
      enabled: false,
      retry: false,
      onSuccess: (data) => {
        setProduct(data.data.result)
      }
    },
  );


  useEffect(() => {
    refetch()
    // eslint-disable-next-line 
  }, [id])

  return (
    <div className='description-Wrapper'>
      <div className='product-wrapper'>
        {product.map((product) => (
          <>
            <div style={{ width: '400px' }}>
              <img src={product?.api_featured_image} alt='' className='productImage' />
            </div>
            <div className='description-details'>
              <h1>{product?.name}</h1>
              <p>Category: {product?.category}</p>
              <p>Product Brand: {product?.brand}</p>            
              <h1 style={{textAlign: 'left'}}>${product?.price}</h1>
              <p>
                {product.description}
              </p>
              <div className='product-color'>
                {product.product_colors.map((color) => {
                  return (
                    <>
                      <div style={{ cursor: 'pointer', height: '20px',borderRadius: '50%', width: '20px', background: `${color.hex_value}` }}></div>
                    </>
                  )
                })}
              </div>
              <div>
                <Button
                  BtnText='Add to Cart'
                  fontSize='18px'
                  BtnWidth='150px'
                  handleClick={() => props.handleCartCount(product)}
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Description;
