import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import FinalLoading from '../Components/Loading/FinalLoading'; 
import { ParentProductViews } from '../Components/Views/ParentProductsViews/ParentProductsViews';

const TypeViewHome = () => {
    const [showPage, setShowPage] = useState(false);
    const router = useRouter(); 
    let query = router.query;
    let search = query.topCategory + query.category + query.collection ;
    useEffect(()=>{
        setShowPage(false)
        if(query.topCategory){ 
            setShowPage(true);
        }
    },[search])

    let {topCategory, category, collection} = query;
    return (
        <div>
            {showPage ? <ParentProductViews infos={{father: category,  parent: collection,  topCategory}}/> : <FinalLoading/>}
        </div>
    );
};

export default TypeViewHome;