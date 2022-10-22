import { faCartShopping, faHeart, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartFive = () => {

    const handleOpenDetails =  ()  => {
        const elements = document.getElementById('close__info__container');
        elements.classList.toggle('active')
    }

    return (
        <div className='cart__five__container'>  
            <div className="image__container"> 
                <img src="/tv2.jpg" alt="" /> 
            </div>
            <div className="open__info__container">
                <p className="product__title">FOLK-STASTIC PENTANT</p>
                <p className="price">$ 100.00</p>
                <div className="open__button__container">
                    <button className='add'><FontAwesomeIcon icon={faCartShopping}/></button>
                    <button className='more' onClick={handleOpenDetails}>VIEW MORE +</button>
                </div>
            </div>
            <div className="close__info__container" id={"close__info__container"}>
                <button className='close__info__button'  onClick={handleOpenDetails}><FontAwesomeIcon icon={faXmark}/></button>
                <p className="product__title">FOLK-STASTIC PENTANT</p>
                <p className="product__details">Starpower, a division of the Star Companies, was formed in 1995. We’re family owned and operated and proud members of the communities that we serve.</p>
                <p className="price">$ 100.00</p>
                <div className="open__button__container__hide">
                    <button><FontAwesomeIcon icon={faCartShopping}/></button>
                    <button><FontAwesomeIcon icon={faHeart}/></button>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button> 
                </div>
            </div>

        </div>
    );
};

export default CartFive;