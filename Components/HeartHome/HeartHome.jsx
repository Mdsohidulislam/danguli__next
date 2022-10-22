import React, { useContext } from 'react';
import AppContext from '../AppContext';
import CartElevenDemo from '../Carts/CartEleven/CartElevenDemo'; 

const HeartHome = () => {
    const {totalHearts} = useContext(AppContext);

    let arr = [1,1,2,2,2,2,2,2,2,2,22,2,2,22,2,2,2,2,2]
    return (
        <div className='heart__next__home__container'> 
                <div className='wishlist__intro'>
                    <h1>YOUR WISHLIST</h1>
                    {totalHearts.cart.length > 1 ? <p>{totalHearts.cart.length} PRODUCTS</p> : <p>{totalHearts.cart.length} PRODUCT</p>}
                </div>
            <div className='next__wish__container'>
                {
                    totalHearts.cart.map((info, index) => <CartElevenDemo infos={info} key={index}/>)
                }
            </div>
        </div>
    );
};

export default HeartHome;