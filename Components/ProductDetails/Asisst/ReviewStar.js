import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewStar = () => {
    return (
        <div className='review__container'>
        <div className='active__review reviews'>
            <FontAwesomeIcon icon={faStar} className='start__element'/>
            <FontAwesomeIcon icon={faStar} className='start__element'/>
            <FontAwesomeIcon icon={faStar} className='start__element'/>
            <FontAwesomeIcon icon={faStar} className='start__element'/>
            <FontAwesomeIcon icon={faStar} className='start__element'/>
        </div>
        <div className='empty__review reviews'>
            <FontAwesomeIcon icon={faStar} className='start__element'/>
            <FontAwesomeIcon icon={faStar} className='start__element'/>
            <FontAwesomeIcon icon={faStar} className='start__element'/>
            <FontAwesomeIcon icon={faStar} className='start__element'/>
            <FontAwesomeIcon icon={faStar} className='start__element'/>
        </div> 
    </div>
    );
};

export default ReviewStar;