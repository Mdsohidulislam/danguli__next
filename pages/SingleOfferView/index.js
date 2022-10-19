import { useRouter } from 'next/router';
import React from 'react'; 
import SingleOfferView from '../../Components/Views/SingleOfferView/SingleOfferView';

const HomeView = () => {
    const router = useRouter();
    
    return (
        <div> 
            <SingleOfferView infos={{promotion__name: router.query.promotion__name}}/>
        </div>
    );
};

export default HomeView;