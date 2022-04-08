import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './navbar.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import SignUp from '../SignUp';

const NavBar = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  let history = useHistory();


  return (
    <div className='nav'>
      <Modal 
        visible={isModalVisible} 
        onCancel={handleCancel}
        footer={null}
      >
        <SignUp />
      </Modal>

      <Link to='/'><h3 className='brand-name'>Glamified</h3></Link>
      <ul>
        <li>Products</li>
        <li>Blog</li>
        <li>Featured</li>
        <li>Contact</li>
      </ul>
      <div className='icons'>
        <p className='signUpText' onClick={handleShowModal}>Sign Up</p>
        <div style={{position: 'relative', cursor: 'pointer'}}>
          <ShoppingCartOutlined style={{ fontSize: '30px' }} onClick={() =>  {
            history.push({
              pathname: '/cart',
              state: props?.cart
            })
          }}  />
          <span className='cartCount'>{props?.cart?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
