import { faCartShopping, faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartFour = () => {

    const handleOpen = () => {
        let element = document.getElementById('one');
        element.classList.toggle('active__four__cart');
        console.log(element);
    }

    const  handleAdd = () => {
        document.getElementById('added').classList.toggle('active')
    }
    
    return (
        <div className='cart__four__container'>
            <div className="details__cart__area" id={'one'}>
                <p className='productDetails'>Customize your Blue 24-inch iMac with apple M! chip</p>
                <p className="review">⭐⭐⭐⭐⭐</p>
                <div className="price__container">
                    <p className="prev__price">$ 222000</p>
                    <p className="current__price">$ 200000</p>
                </div>
                <p className='brand'>Appollo</p>
                <div className="button__container">
                    <button>wish</button>
                    <button>quick</button>
                    <button>cart</button>
                </div>
                <button className='toggle__button__close' onClick={handleOpen}><FontAwesomeIcon icon={faXmark}/> </button>
                <button className='toggle__button__open' onClick={handleOpen}><FontAwesomeIcon icon={faCircleInfo}/></button>
            </div>
            <div className="image__container">
                <img src="/bag.png" alt="" />
            </div>
            <div className="info__container" id='added'>
                <div className="visible">
                    <div className="left__container">
                        <p className='bag__name'>LOTTO</p>
                        <p className="bag__price">$ 900</p>
                        
                    </div>
                    <div className="right__container" onClick={handleAdd}> 
                    <FontAwesomeIcon icon={faCartShopping}/>
                    </div>
                </div>
                <div className="hidden">
                    <div className="right__container" onClick={handleAdd}> 
                    <FontAwesomeIcon icon={faXmark}/>
                    </div>
                    <div className="left__container">
                            <p className='bag__name'>LOTTO</p>
                            <p className="added__message">Added to your cart</p>
                            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartFour;

// ❌