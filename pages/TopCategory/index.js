import { useRouter } from 'next/router';
import React from 'react'; 
import  TopCategoryView  from '../../Components/Views/TopCategory/TopCategoryView';


const HomeView = () => {
    const router = useRouter();
    
    return (
        <div> 
            <TopCategoryView infos={{topCategory: router.query.topCategory}}/>
        </div>
    );
};

export default HomeView;