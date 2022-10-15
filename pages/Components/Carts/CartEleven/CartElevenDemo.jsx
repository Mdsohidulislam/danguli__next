import { faCartShopping, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { images } from '../../../Images';

const CartElevenDemo = ({infos}) => {

    
    return ( 
            <div className='cart__eleven__container'>
                <div className="image__container"> 
                    <img src={"/CartImages/"+images[Math.ceil(Math.random()*11)]} alt='Hello world' title='Hello world' />      
                    <div className='button__container'>
                <button> <FontAwesomeIcon icon={faCartShopping}/> </button>
                <button> <FontAwesomeIcon icon={faHeart}/></button>
                <button><FontAwesomeIcon icon={faSearch}/></button>
            </div>
                </div>
                <div className="info__container">
                    <hr className="top" />
                    <p className='product__category'>Lenovo</p>
                    <p className="product__title">TP-Link L920-5 Multi-Colour Smart Wi-Fi Light Strip 5m and</p>
                    <div className="current__price">৳  122.22<span className="prev__price">৳ 3333.33</span></div> 
                    <hr className="bottom" />
                </div> 
            </div>  
    );  
};

export default CartElevenDemo;