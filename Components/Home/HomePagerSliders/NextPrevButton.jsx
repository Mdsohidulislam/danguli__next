import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';
import { uid } from 'uid';

const NextPrevButtonUYGS = ({name, previous, next}) => {
    const router = useRouter();
    const handlePushSingleCategoryPages = (name) => {
        router.push({
            pathname:'SingleOfferView',
            query:{promotion__name: name, afk: uid(10)}
        })
    }
    return (
        <div className="header__slider__button__container">
        <button className="button" onClick={previous}>
            <FontAwesomeIcon icon={faBackward}/>
        </button> 
        <button style={{marginLeft:'10px'}} onClick={()=>handlePushSingleCategoryPages(name)} className="button">
            VIEW ALL
        </button> 
        <button className="button" onClick={next}>
            <FontAwesomeIcon icon={faForward}/>
        </button>
        </div>
    );
};

export default NextPrevButtonUYGS;