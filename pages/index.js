


import React, { useState } from 'react';
import Home from '../Components/Home/Home';
import ReactProgressButton from 'react-progress-button'; 
import { Toaster } from 'react-hot-toast';
import CartBox from '../Components/SideBar/CartBox';

const index = () => {

  


  return (
    <div>
      <Toaster/>
      <Home/> 
      <CartBox/>
    </div>
  );
};

export default index;