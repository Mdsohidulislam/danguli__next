import { faCartShopping, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { utilsHelper } from '../../../UTILS/utils';

const CartEleven = ({infos}) => {

    
    return (
        <div className='cart__eleven__container__show'>
            <div className='cart__eleven__container'>
                <div className="image__container">
                    <Link to={`/product/details/${infos.product__id}`}>
                    <img src={infos.img__src} alt={infos.title} title={infos.title} /> </Link>
                </div>
                <div className="info__container">
                    <hr className="top" />
                    <p className='product__category'>{infos.collection}</p>
                    <Link to={`/product/details/${infos.product__id}`}  className="product__title">{utilsHelper.stringOperations.stringCutter(infos.title)}</Link>
                    <div className="current__price">৳ {infos.current__price}<span className="prev__price">৳ {infos.previous__price}</span></div> 
                    <hr className="bottom" />
                </div> 
                <div className='button__container'>
                <button> <FontAwesomeIcon icon={faCartShopping}/> </button>
                <button> <FontAwesomeIcon icon={faHeart}/></button>
                <button><FontAwesomeIcon icon={faSearch}/></button>
            </div>
            </div> 
        </div>
    );  
};

export default CartEleven;