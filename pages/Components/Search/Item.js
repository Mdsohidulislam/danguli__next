import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({details}) => { 
        let {img__src, title, product__id, current__price} = details;
    
    return (
    <div className='search__result__item__container' > 
        <div className='image__container'>
            <Link to={`/product/details/${product__id}`} > <img src={img__src} alt={title}></img> </Link>
        </div>
        <div className='info__container'>
            <p className='title'><Link to={`/product/details/${product__id}`} >{title}</Link></p>
            <p className='product__id'>{product__id}</p>
            <p className='product__id'>{current__price}</p>
        </div>
    </div>
    );
};

export default Item;