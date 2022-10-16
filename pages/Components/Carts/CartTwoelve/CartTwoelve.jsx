import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { utilsHelper } from '../../../UTILS/utils';

const CartTwoelve = () => {
    return (
        <div className='cart__cover'>
            <div className='cart__twoelve__container'> 
                <div className="image__container">
                    <img src="/lunch5.png" alt="" />
                </div>
                <div className="info__container"> 
                    <p className="product__title">HP</p>
                    <div className="price">$ 100.00</div>
                    <hr className="middle" /> 
                    <p className="product__uses">{utilsHelper.stringOperations.stringCutter('HP Enterprise M554dn Single Function Color Laser Printer')}</p>
                    
                </div>
                <div className="button__container">
                    <button><FontAwesomeIcon icon={faCartShopping}/></button>
                    <button><FontAwesomeIcon icon={faHeart}/></button>
                    <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button> 
                </div>
            </div>
        </div>
    );
};

export default CartTwoelve;