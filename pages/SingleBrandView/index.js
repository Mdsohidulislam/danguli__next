import { useRouter } from 'next/router';
import React from 'react';
import  SingleBrandView  from '../../Components/Views/BrandViews/BrandViews'; 

const HomeView = () => {
    const router = useRouter();
    
    return (
        <div> 
            <SingleBrandView infos={{name: router.query.name}}/>
        </div>
    );
};

export default HomeView;