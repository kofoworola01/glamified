import React from "react";
import { Carousel } from 'antd';
import "./banner.css";
import banner1 from "../../assets/images/makeup3.jpg";
import banner2 from "../../assets/images/makeup1.jpg";
import banner3 from "../../assets/images/makeup6.jpg";


const index = () => {
  return (
    <div>
      <Carousel autoplay dots={false}>
      <div className='img-wrapper'>
        <img src={banner2} alt="" />
      </div>
      <div className='img-wrapper'>
        <img src={banner1} alt="" />
      </div>
      <div className='img-wrapper'>
        <img src={banner3} alt="" />
      </div>
      </Carousel>
      
    </div>
  );
};

export default index;
