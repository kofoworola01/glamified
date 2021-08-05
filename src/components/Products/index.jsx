import React from "react";
import { Row, Col } from "antd";
import lipstick from "../../assets/images/lipstick.jpg";
import "./products.css";



const data = [{
  Image: lipstick,
  productName: 'Lipstick',
  category: 'category'
}];

const index = () => {
  return (
    <div className="products-wrapper">
      <Row justify="space-between">
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
      
      <Row gutter={[16, 48]}>
        {data.map((data,i) => (
          <Col xxl={6} lg={8} md={12}>
            <div className="card">
              <div className="product-img">
                <img src={data.Image} alt="" />
              </div>
              <div>
              <h2>{data.productName}</h2>
              <p>{data.category}</p>
              <button>Add to Cart</button>
              </div>
            </div>
          </Col>    
        ))}
      </Row>

    </div>
  );
};

export default index;
