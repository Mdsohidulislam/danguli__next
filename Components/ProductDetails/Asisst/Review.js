import React from 'react';
import ReviewStar from './ReviewStar';

const Review = () => {
    return (
        <div className='product__review__item'>
        <p className='reviewer__name'>MD SOHIDUL ISLAM</p>
            <img src='/profile.png' className='review__user'></img>
        <small>9 month ago</small>
        <ReviewStar/> 
        <p className='review'>If you consider the perspective of a hybrid photographer, graphic designer or videographer, then this BenQ SW321C monitor could be the best 4k monitor for sure. This flagship one is anyway the best monitor for photo editing, video editing, and so on. This monitor is a 32 inch IPS type panel and it has 4K or ultra HD resolution of 3840x2160. If you are looking for the brightest monitor with vibrant color and striking contrast, then this one is not for you. This is meant to be used as neutral and technically color accurate as you can get. The anti-glare on the screen is really good and it does a fascinating job in eliminating any specular highlights or glares.</p>
</div>
    );
};

export default Review;