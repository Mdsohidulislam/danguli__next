import { faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartNnDemo = () => {
    return (
        <div className='cart__nnn'>
        <div className='image__container'>
            <div className='images'>
                <img src='/one (1).png' alt='product'/>
                <img src='/one (2).png' alt='product'/>
            </div>
        </div>
        <div  className='info__container'>
            <p className='title'>TP-Link L920-5 Multi-Colour Smart Wi-Fi Light Strip 5m and</p>
            
            <div className='offter__buttons__container'>
                <p className='discount'>save ৳ 20.00</p>
                {/*  <button className='offer__button hot__deal'>hot deal</button> */}
                <button className='offer__button free__shipping'>free shipping</button>
                <button className='offer__button flash__sale'>flash sale!</button>
                <button className='offer__button bundle'>bundle</button>
                <button className='offer__button coupon'>coupon</button>
            </div>
            <div className='button__and__stock__container'>
                <span className='price'> ৳ 300.00</span>
                
                <span className='stock in'>In Stock</span>
                {/* <span className='stock out'>Out Of Stock</span>  */}
            </div>
            <div className='action__button__container'>
                <button> <FontAwesomeIcon icon={faShoppingCart}/> </button>
                <button> <FontAwesomeIcon icon={faHeart}/> </button>
                <button> <FontAwesomeIcon icon={faSearch}/> </button>
            </div>
        </div>
    </div>
    );
};

export default CartNnDemo;