import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { ShoppingCartOutlined } from '@ant-design/icons';

const index = () => {
  return (
    <div className='nav'>
      <Link to='/home'><h3 className='brand-name'>Glamified</h3></Link>
      <ul>
        <li>Products</li>
        <li>Blog</li>
        <li>Featured</li>
        <li>Contact</li>
      </ul>
      <div className='icons'>
      <ShoppingCartOutlined style={{ fontSize: '30px' }} />
      </div>
    </div>
  );
};

export default index;
