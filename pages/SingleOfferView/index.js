import { useRouter } from 'next/router';
import React from 'react'; 
import SingleOfferView from '../../Components/Views/SingleOfferView/SingleOfferView';
import {Toaster} from 'react-hot-toast';
import CartBox from '../../Components/SideBar/CartBox';
const HomeView = () => {
    const router = useRouter();
    
    return (
        <div> 
            <Toaster/>
            <CartBox/>
            <SingleOfferView infos={{promotion__name: router.query.promotion__name}}/>
        </div>
    );
};

export default HomeView;