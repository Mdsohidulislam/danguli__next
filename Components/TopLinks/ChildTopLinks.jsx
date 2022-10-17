import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'; 
import { uid } from 'uid';

const ChildTopLinks = ({infos}) => {  
    let {topCategory, parent__father, parent, child} = infos;
    
    const router = useRouter();
    const handleBrandPagePUsh = () => {
        router.push({
            pathname: '/BrandView',
            query: { topCategory, category:parent__father, collection: parent, brandOrType: child, afk: uid(10)},
        })
    }

    const handlePushCollectionPage = () => {
        router.push({
            pathname: '/CollectionView',
            query: { topCategory, category:parent__father, collection: parent, afk: uid(10)},
        })
    }

    const handlePushCategoryPage = () => {
        router.push({
            pathname: '/CategoryView',
            query: { topCategory, category:parent__father, afk: uid(10)},
        })
    }

    const handlePushTopCollectionPage = () => {
        router.push({
            pathname: '/TopCategory',
            query: { topCategory, category:parent__father, afk: uid(10)},
        })
    }
    
    const handlePushHomePage = () => {
        router.push('/');
    }
    return (
        <div className='category__or__product__link__container'>
            <button className='body__header__middle__Link' onClick={handlePushHomePage}>Home</button>
            <FontAwesomeIcon className='body__header__middle__arrow' icon={faAnglesRight}/> 
            <button  className='body__header__middle__Link' >{topCategory}</button>
            <FontAwesomeIcon className='body__header__middle__arrow' icon={faAnglesRight}/> 
            <button  className='body__header__middle__Link' onClick={handlePushCategoryPage}>{parent__father}</button>
            <FontAwesomeIcon className='body__header__middle__arrow' icon={faAnglesRight}/> 
            <button  className='body__header__middle__Link' onClick={handlePushCollectionPage}>{parent}</button> 
            <FontAwesomeIcon className='body__header__middle__arrow' icon={faAnglesRight}/> 
            <button  className='body__header__middle__Link' onClick={handleBrandPagePUsh}>{ child}</button> 
        </div>
    );
};

export default ChildTopLinks;