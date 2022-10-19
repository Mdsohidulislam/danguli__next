import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartPonero = () => {
    return (
        <div className='cart__ponero__container'> 
            <div className="image__container">
                <img src="/dinner.png" alt="" />
                <div className="button">
                    <button><FontAwesomeIcon icon={faCartShopping}/></button>
                </div>
            </div>
        </div>
    );
};

export default CartPonero;