import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import {
  TwitterCircleFilled,
  PhoneFilled,
  FacebookFilled,
  InstagramFilled,
  MailFilled,
} from '@ant-design/icons';
import './footer.css';

const index = () => {
  return (
    <div style={{ backgroundColor: 'black' }} className='footer-box'>
      <Row>
        <Col span={6}>
          <h2 className='footer-title'>About Glamified</h2>
          <div className='footer-content'>
            <Link className='link'>About Us</Link>
            <Link className='link'>Blog</Link>
            <Link className='link'>Terms and Policy</Link>
          </div>
        </Col>
        <Col span={6}>
          <div className='Social-icons-box'>
            <h2 className='footer-title'>Follow us</h2>
            <Link className='link'>
              <TwitterCircleFilled className='social-icons' />
              Twitter
            </Link>
            <Link className='link'>
              <InstagramFilled className='social-icons' />
              Instagram
            </Link>
            <Link className='link'>
              <FacebookFilled className='social-icons' />
              Faceboook
            </Link>
          </div>
        </Col>
        <Col span={6}>
          <div className='footer-content'>
            <h2 className='footer-title'>Contact Us</h2>
            <Link className='link'>
              <PhoneFilled className='social-icons' />
              +234 90 000 00
            </Link>
            <Link className='link'>
              <MailFilled className='social-icons' />
              support@glamified.com
            </Link>
          </div>
        </Col>
        <Col span={6}>
        <h3 className='footer-title'>Receive Email updates on our products</h3>
          <input type='email' placeholder='Enter Email' className='footer-input' />
          <button className='footer-button'>Subscribe</button>
        </Col>
      </Row>
      <div className='hr'></div>
      <div className='footer-text'>
        &copy; 2021 Glamified. All rights reserved.
      </div>
    </div>
  );
};

export default index;
