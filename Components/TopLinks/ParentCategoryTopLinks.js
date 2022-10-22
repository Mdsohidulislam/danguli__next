import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { useRouter } from 'next/router';
import React from 'react'; 
import { uid } from 'uid';

const ParentCategoryTopLinks = () => {  
    
    
    const router = useRouter();
    

    const handlePushTopCollectionPage = () => {
        router.push({
            pathname: '/AllCategoryView',
            query: {afk: uid(10)},
        })
    }
    
    const handlePushHomePage = () => {
        router.push('/');
    }
    return (
        <div className='category__or__product__link__container'>
            <button className='body__header__middle__Link' onClick={handlePushHomePage}>Home</button>
            <FontAwesomeIcon className='body__header__middle__arrow' icon={faAnglesRight}/> 
            <button  className='body__header__middle__Link' onClick={handlePushTopCollectionPage}>Collection</button> 
        </div>
    );
};

export default ParentCategoryTopLinks;