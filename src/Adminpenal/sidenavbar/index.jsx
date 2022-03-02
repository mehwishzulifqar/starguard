import React from 'react';
import { Layout, Image } from 'antd';
import "./style.css";
import { Link } from "react-router-dom";
const {  Sider } = Layout;
const sidenavbar = () => {
  return(
    <>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
      <Link to={'/'}>
          <div className='Frame_images1'>
            <Image src='./images/Group 7223.png' />
          </div>
        </Link>
        <Link to={'/'}>
          <div className='Frame_images1'>
            <Image src='./images/Frame7219.png' />
          </div>
        </Link>
        
        <Link to={'/'}>
          <div className='Frame_images'>
            <Image src='./images/Frame 7225.png' />
          </div>
        </Link> 
      </Sider>
    </>
  )
}
export default sidenavbar;