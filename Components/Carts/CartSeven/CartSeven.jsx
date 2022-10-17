import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartSeven = () => {
    return (
        <div className='cart__seven__container'> 
            <div className="image__container">
                <img src="/lunch5.png" alt="" />
            </div>
            <div className="info__container">
                <div className="button__container">
                    <button><FontAwesomeIcon icon={faCartShopping}/></button>
                    <button><FontAwesomeIcon icon={faHeart}/></button>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button> 
                </div>
                <p className='price'>$ 1200.00</p>
            </div>
        </div>
    );
};

export default CartSeven;