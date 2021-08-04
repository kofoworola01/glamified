import React from 'react';
import './navbar.css';
import { ShoppingCartOutlined } from '@ant-design/icons';

const index = () => {
  return (
    <div className='nav'>
      <h3 className='brand-name'>Glamified</h3>
      <ul>
        <li>Featured</li>
        <li>Featured</li>
        <li>Featured</li>
        <li>Featured</li>
      </ul>
      <div className='icons'>
      <ShoppingCartOutlined style={{ fontSize: '30px' }} />
      </div>
    </div>
  );
};

export default index;
