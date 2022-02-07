import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { EyeItemsApi } from "../../api";
import { Link } from 'react-router-dom'
import { Row, Col } from "antd";
import Navbar from '../../components/Navbar'
import Button from '../../components/Button';
import Footer from '../../components/Footer'

import './eyes.css'

const Eyes = () => {

  const { data, isLoading, refetch } = useQuery(
    'fetchCategory',
    () => EyeItemsApi(),
      {
        enabled: false,
        retry: false,
      },
  )

  useEffect(() => {
    refetch()

    // eslint-disable-next-line
  }, [])

  let items = data?.data  

  return (
    <div>
      <Navbar />
      <div className='Wrapper'>
        <h1>EYES</h1> 
      { isLoading ? (
        <p style={{textAlign: 'center', marginTop: 50}}>Loading...</p>
      ) :  (
        <>
        <Row gutter={[30, 16]}>
        {items?.map((data) => (
          <Col xxl={6} lg={6} md={12} key={data.id}>
            <div className="card">
              <div className="product-img">
                <Link to='/description'>
                <img src={data?.api_featured_image} alt="" />
                </Link>
              </div>
              <div>
                <div className="product-details">
                  <h2>{data?.name}</h2>
                  <p>{data?.category}</p>
                  <p style={{fontSize: '20px'}}>{data?.price_sign}{data?.price}</p>
                  <Button BtnText='Add to Cart' type='homepage'/> 
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
        </>
      )}
      </div>
      <Footer />
    </div>
  )
}

export default Eyes
