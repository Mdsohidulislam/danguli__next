import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { images } from '../../../Images';

const CartThero = () => {
    return (
        <div className='cart__cover'>
            <div className='cart__thero__container'> 
                <div className="image__container">
                    <div className="button__container">
                        <div className="all__button">
                            <button><FontAwesomeIcon icon={faCartShopping}/></button>
                            <button><FontAwesomeIcon icon={faHeart}/></button>
                            <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button> 
                        </div>

                        <button className='price'>$ 100.00</button>
                    </div>
                    <img src={"/CartImages/"+images[Math.ceil(Math.random()*11)]} alt="" />
                </div>
                <div className="info__container"> 
                    <p className="product__title">Men's Steple Dasher</p> 
                    <p className="product__uses">Limited edition color, multi mehlange</p>
                </div> 
            </div>
        </div>
    );
};

export default CartThero;