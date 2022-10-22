import { useRouter } from 'next/router';
import React from 'react'; 
import { Toaster } from 'react-hot-toast';
import CartBox from '../../Components/SideBar/CartBox';
import  TopCategoryView  from '../../Components/Views/TopCategory/TopCategoryView';


const HomeView = () => {
    const router = useRouter();
    
    return (
        <div> 
            <Toaster/>
            <CartBox/>
            <TopCategoryView infos={{topCategory: router.query.topCategory}}/>
        </div>
    );
};

export default HomeView;