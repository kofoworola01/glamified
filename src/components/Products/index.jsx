import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router';
import { ProductsApi, EyeItemsApi, CreamItemsApi, ConcealerItemsApi } from '../../api';
import { Row, Col } from 'antd';
import Button from '../Button';
import './products.css';

const Products = (props) => {
  const history = useHistory();
  const getUrl = history.location.pathname.split('/')[1]
  

  const { data, isLoading, refetch } = useQuery(
    'fetchCategory',
    () => props.page === 'eye' ? EyeItemsApi() : 
          props.page === 'cream' ? CreamItemsApi() : 
          props.page === 'concealer' ? ConcealerItemsApi() : ProductsApi(),
    {
      enabled: false,
      retry: false,
    }
  );

  let items = data?.data?.result;

  // const handleDisbaleButton = (id) => {
  //   return props.cart.find(item => item.id === id)
  // }
  

  useEffect(() => {
    refetch();

    // eslint-disable-next-line
  }, []);

  return (
    <div className='products-wrapper'>
      {props.page !== 'eyes' &&
        <Row justify='space-around'>
          <Col
            span={4}
            className='category'
            onClick={() => history.push('/eyes')}
            style={{background: `${getUrl === 'eyes' && 'rgb(255, 224, 229)'}`}}
          >
            EYE
          </Col>
          <Col 
            span={4} 
            className='category' 
            onClick={() => history.push('/concealer')}
            style={{background: `${getUrl === 'concealer' && 'rgb(255, 224, 229)'}`}}
            >
            CONCEALER
          </Col>
          <Col span={4} className='category' onClick={() => history.push('/cream')} style={{background: `${getUrl === 'cream' && 'rgb(255, 224, 229)'}`}}>
            CREAM
          </Col>
          <Col span={4} className='category'>
            MORE
            <span style={{ marginLeft: 14 }}>
              <svg
                width='10'
                height='6'
                viewBox='0 0 10 6'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M5 5.33333L0 0.333328H10L5 5.33333Z' fill='black' />
              </svg>
            </span>
          </Col>
        </Row>
      }
      {isLoading ? (
        <p style={{ textAlign: 'center', marginTop: 50 }}>Loading...</p>
      ) : (
        <>
          <Row gutter={[30, 16]}>
            {items?.map((data) => (
              <Col xxl={6} lg={6} md={12} key={data.id}>
                <div className='card'>
                  <div
                    className='product-img'
                    onClick={() => {
                      history.push(`/product/${data?.id}`)
                    }}
                  >
                    <img src={data?.api_featured_image} alt='' />
                  </div>
                  <div>
                    <div className='product-details'>
                      <h2>{data?.name}</h2>
                      <p>Brand: {data?.brand}</p>
                      <p style={{ fontSize: '20px' }}>
                        ${data?.price}
                      </p>
                      <Button
                        BtnText='Add to Cart'
                        type='homepage'
                        handleClick={() => props.handleCartCount(data)}
                        // disabled={handleDisbaleButton(data.id)}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default Products;
