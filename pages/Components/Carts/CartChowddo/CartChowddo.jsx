import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartChowddo = () => {
    return (
        <div className='cart__chowddo__container'> 
            <div className="image__container">
                <img src="/lunch5.png" alt="" />
            </div>
            <div className="info__container"> 
                <p className="product__title">Tree Dasher</p>
                <div className="price">$ 100.00</div> 
                <p className="product__uses">for everyday runs</p>
                    
                    <div className="button__container">
                        <button><FontAwesomeIcon icon={faCartShopping}/></button>
                        <button><FontAwesomeIcon icon={faHeart}/></button>
                        <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button> 
                    </div>
            </div>

        </div>
    );
};

export default CartChowddo;