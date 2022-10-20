import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { useRouter } from 'next/router';
import React from 'react'; 
import { uid } from 'uid';

const SingleCategoryTopLinks = ({infos}) => {  
    let {name} = infos;
    
    const router = useRouter();
    
    const handlePushCategoryPage = () => {
        router.push({
            pathname: '/SingleCategoryView',
            query: { name, afk: uid(10)},
        })
    }

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
            <FontAwesomeIcon className='body__header__middle__arrow' icon={faAnglesRight}/> 
            <button  className='body__header__middle__Link' onClick={handlePushCategoryPage}>{name}</button> 
        </div>
    );
};

export default SingleCategoryTopLinks;