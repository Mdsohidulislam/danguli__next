import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { images } from '../../../Images';

const CartEight = () => {
    return (
        <div className='cart__eight__container'> 
            <div className="image__container">
                <img src={"/CartImages/"+images[Math.ceil(Math.random()*11)]} alt="" />
                <div className="button__container">
                        <button><FontAwesomeIcon icon={faCartShopping}/></button>
                        <button><FontAwesomeIcon icon={faHeart}/></button>
                        <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button> 
                    </div>
            </div>
            <div className="info__container">
                <p className='product__title'>TP-Link L920-5 Multi-Colour Smart Wi-Fi Light Strip 5m and</p>
                <p className="price">$ 100.00</p>
                <button>buy now</button>
            </div>
        </div>
    );
};

export default CartEight;