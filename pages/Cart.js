import React from 'react';
import { Toaster } from 'react-hot-toast';
import CartPage from '../Components/CartPage/CartPage';
import Navbar from '../Components/Navbar/Navbar';
import CartBox from '../Components/SideBar/CartBox';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Toaster/>
            <CartPage/>
            <CartBox/>
        </div>
    );
};

export default Home;