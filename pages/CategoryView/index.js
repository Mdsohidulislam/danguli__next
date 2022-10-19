import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import FinalLoading from '../../Components/Loading/FinalLoading'; 
import ParentFatherView  from '../../Components/Views/ParentFatherProductsViews/ParentFatherProductsViews'; 

const TypeViewHome = () => {
    const [showPage, setShowPage] = useState(false);
    const router = useRouter(); 
    let query = router.query;
    let search = query.topCategory + query.category;
    useEffect(()=>{
        setShowPage(false)
        if(query.topCategory){ 
            setShowPage(true);
        }
    },[search])

    let {topCategory, category} = query;
    return (
        <div>
            {showPage ? <ParentFatherView infos={{father: category, topCategory}}/> : <FinalLoading/>}
        </div>
    );
};

export default TypeViewHome;