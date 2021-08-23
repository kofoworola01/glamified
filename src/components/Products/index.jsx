import React from "react";
import { Link } from 'react-router-dom'
import { Row, Col } from "antd";
import lipstick from "../../assets/images/makeup1.jpg";
import Button from '../Button';
import "./products.css";

// import FormBody from './../FormBody';

const data = Array(10).fill({
  id: 1,
  Image: lipstick,
  productName: "Lipstick",
  category: "category",
  price: "$45.99",
});

const index = () => {
  return (
    <div className="products-wrapper">
      {/* <h1 style={{textAlign: 'center'}}>Categories</h1> */}

      <Row justify="space-around">
        <Col span={4} className="category">
          EYES
        </Col>
        <Col span={4} className="category">
          LIPS
        </Col>
        <Col span={4} className="category">
          NAILS
        </Col>
        <Col span={4} className="category">
          MORE
          <span style={{ marginLeft: 14 }}>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 5.33333L0 0.333328H10L5 5.33333Z" fill="black" />
            </svg>
          </span>
        </Col>
      </Row>

      <Row gutter={[30, 16]}>
        {data.map((data, i) => (
          <Col xxl={6} lg={6} md={12}>
            <div className="card">
              <div className="product-img">
                <Link to='/description'>
                <img src={data.Image} alt="" />
                </Link>
              </div>
              <div>
                <div className="product-details">
                  <h2>{data.productName}</h2>
                  <p>{data.category}</p>
                  <p style={{fontSize: '20px'}}>{data.price}</p>
                  <Button BtnText='Add to Cart' type='homepage'/> 
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default index;
