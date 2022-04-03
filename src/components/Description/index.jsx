import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getSingleProduct } from '../../api';
import Button from '../Button';
import './description.css';

const Description = () => {

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

  console.log(product, 'product')
 

  useEffect(() => {
    refetch()
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
          <h1>{product.product_type}</h1>
          <h3>{product?.category}</h3>
          <h1>{product?.brand}</h1>
          <h1>${product?.price}</h1>
          <p>
           {product.description}
          </p>
          <div>
            <Button 
              BtnText='Add to Cart' 
              fontSize='18px' 
              BtnWidth='150px'
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
