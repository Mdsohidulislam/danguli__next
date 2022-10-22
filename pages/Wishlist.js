import React from 'react'; 
import { Toaster } from 'react-hot-toast'; 
import Footer from '../Components/Footer/Footer';
import FooterBanner from '../Components/FooterBanner/FooterBanner';
import HelpFooter from '../Components/FooterBanner/HelpFooter';
import HeartHome from '../Components/HeartHome/HeartHome';
import Navbar from '../Components/Navbar/Navbar';
import CartBox from '../Components/SideBar/CartBox';

const Home = () => {
    return (
        <div>   
            <Navbar/>
            <Toaster/>
            <HeartHome/>
            <FooterBanner/>
            <HelpFooter/>
            <Footer/>
            <CartBox/>
        </div>
    );
};

export default Home;