import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import FinalLoading from '../../Components/Loading/FinalLoading';
import ChildProductsViews  from '../../Components/Views/ChildProductsViews/ChildProductViews';

const TypeViewHome = () => {
    const [showPage, setShowPage] = useState(false);
    const router = useRouter(); 
    let query = router.query;
    let search = query.topCategory + query.category + query.collection + query.brandOrType 
    useEffect(()=>{
        setShowPage(false)
        if(query.topCategory){ 
            setShowPage(true);
        }
    },[search])

    let {topCategory, category, collection, brandOrType} = query;
    return (
        <div>
            {showPage ? <ChildProductsViews infos={{father: category,  parent: collection, child: brandOrType, topCategory}}/> : <FinalLoading/>}
        </div>
    );
};

export default TypeViewHome;