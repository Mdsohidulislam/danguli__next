import { faCodeCompare, faHeart, faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const DetailsBuyButtonGroup = () => {
    const [produuctQuantity, setProductQuantity] = useState(0);
    return (
        <div className='details__buy__button__group__container'>
            <div  className='button__group'>
                <button onClick={()=> setProductQuantity(produuctQuantity - 1)}><FontAwesomeIcon icon={faMinus}/></button>
                <button>{produuctQuantity}</button>
                <button onClick={()=> setProductQuantity(produuctQuantity+1)}><FontAwesomeIcon icon={faPlus}/></button>
                <button><FontAwesomeIcon icon={faHeart}/></button>
                <button><FontAwesomeIcon icon={faCodeCompare}/></button>
                <button><FontAwesomeIcon icon={faShoppingCart}/></button>
            </div>
            <button className='buy__now'>BUY NOW</button>
        </div>
    );
};

export default DetailsBuyButtonGroup;