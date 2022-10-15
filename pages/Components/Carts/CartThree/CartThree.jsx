import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartThree = () => {
    return (
        <div className='cart__three__container'> 
            <div className="image__container"> 
                    <img src="/mac.png" alt="" /> 
            </div>
            <div className="tree__cart__button__container">
                <button><FontAwesomeIcon icon={faCartShopping}/></button>
                <button><FontAwesomeIcon icon={faHeart}/></button>
                <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button> 
            </div>
            <div className="price__container">
                <p className="prev__price">$ 222000</p>
                <p className="current__price">$ 200000</p>
            </div>
            <div className="intro__container">
                <p className="title">Customize your Blue 24-inch iMac with apple M! chip</p>
            </div>
        </div>
    );
};

export default CartThree;