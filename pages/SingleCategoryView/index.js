import { useRouter } from 'next/router';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import CartBox from '../../Components/SideBar/CartBox';
import SingleCategoryView  from '../../Components/Views/CategoryViews/CategoryViews';

const HomeView = () => {
    const router = useRouter();
    
    return (
        <div> 
            <CartBox/>
            <Toaster/>
            <SingleCategoryView infos={{name: router.query.name}}/>
        </div>
    );
};

export default HomeView;