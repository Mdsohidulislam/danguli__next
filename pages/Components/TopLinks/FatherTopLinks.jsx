import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { useRouter } from 'next/router';
import React from 'react'; 
import { uid } from 'uid';

const FatherTopLinks = ({infos}) => {  
    let {topCategory, parent__father} = infos;
    
    const router = useRouter();
    
    const handlePushCategoryPage = () => {
        router.push({
            pathname: '/CategoryView',
            query: { topCategory, category:parent__father, afk: uid(10)},
        })
    }

    const handlePushTopCollectionPage = () => {
        router.push({
            pathname: '/TopCategory',
            query: { topCategory, afk: uid(10)},
        })
    }
    
    const handlePushHomePage = () => {
        router.push('/');
    }
    return (
        <div className='category__or__product__link__container'>
            <button className='body__header__middle__Link' onClick={handlePushHomePage}>Home</button>
            <FontAwesomeIcon className='body__header__middle__arrow' icon={faAnglesRight}/> 
            <button  className='body__header__middle__Link'>{topCategory}</button>
            <FontAwesomeIcon className='body__header__middle__arrow' icon={faAnglesRight}/> 
            <button  className='body__header__middle__Link' onClick={handlePushCategoryPage}>{parent__father}</button> 
        </div>
    );
};

export default FatherTopLinks;