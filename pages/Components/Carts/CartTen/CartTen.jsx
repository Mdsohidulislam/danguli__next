import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { images } from '../../../Images';

const CartTen = () => {
    return (
        <div className='cart__cover'>
            <div className='cart__ten__container'>
                    <div className="image__container">
                        <img src={"/CartImages/"+images[Math.ceil(Math.random()*11)]} alt="" />
                    </div>
                    <div className="info__container">
                        <p className="price">$ 300.00</p>
                        <button><FontAwesomeIcon icon={faCartShopping}/></button>
                    </div>
            </div>
        </div>
    );
};

export default CartTen;