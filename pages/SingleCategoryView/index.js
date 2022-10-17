import { useRouter } from 'next/router';
import React from 'react';
import SingleCategoryView  from '../../Components/Views/CategoryViews/CategoryViews';

const HomeView = () => {
    const router = useRouter();
    
    return (
        <div> 
            <SingleCategoryView infos={{name: router.query.name}}/>
        </div>
    );
};

export default HomeView;