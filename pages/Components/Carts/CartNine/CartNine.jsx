import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartNine = () => {
    return (
        <div className='cart__nine__container'> 
            <div className="button__container">
                <button><FontAwesomeIcon icon={faCartShopping}/></button>
                <button><FontAwesomeIcon icon={faHeart}/></button>
                <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button> 
            </div>
            <div className="image__container">
                <img src="/dinner.png" alt="" />
            </div>
            <div className="info__container">
                <p className="product__title">Yummy breakfast...</p>
                <p className="price">$ 100.00</p>
                <p className="brand">Sabji bazar</p>
            </div>
        </div>
    );
};

export default CartNine;