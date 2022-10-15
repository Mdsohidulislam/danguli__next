import React from 'react';
import Review from '../ProductDetails/Asisst/Review';
import ReviewForm from '../ProductDetails/Asisst/ReviewForm';

const ReviewCon = ({review}) => {
    return (
        <div  className='product__review__items__container' id='product__review'>
            {
                review.map((info, index) => <Review key={index} info={info}/>)
            }
            <ReviewForm/>
        </div>
    );
};

export default ReviewCon;