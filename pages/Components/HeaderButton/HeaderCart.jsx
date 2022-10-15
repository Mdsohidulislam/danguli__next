import React from 'react';
import { images } from '../../Images';
import { utilsHelper } from '../../UTILS/utils';

const HeaderCart = () => {
    return (
        <div className='header__cart__cover__header__cart'>
            <div className='header__cart__container'> 
                <div className='image__container'>
                    <img src={"/CartImages/"+images[Math.ceil(Math.random()*11)]} alt='hello world'/>
                </div>
                <div className='info__container'>
                    <p className='title'>{utilsHelper.stringOperations.stringCutter('TP-Link L920-5 Multi-Colour Smart Wi-Fi Light Strip 5m and')}</p>
                    <p className='price'>$ 123.33</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderCart;