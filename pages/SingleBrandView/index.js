import { useRouter } from 'next/router';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import CartBox from '../../Components/SideBar/CartBox';
import  SingleBrandView  from '../../Components/Views/BrandViews/BrandViews'; 

const HomeView = () => {
    const router = useRouter();
    
    return (
        <div> 
            <CartBox/>
            <Toaster/>
            <SingleBrandView infos={{name: router.query.name}}/>
        </div>
    );
};

export default HomeView;