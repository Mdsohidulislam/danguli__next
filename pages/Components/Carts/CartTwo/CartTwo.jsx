import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { images } from '../../../Images';
const CartTwo = () => {
    
    return (
        <div className='cart__cover'>
                    <div className='main__cart__container'>
            <div className="container">
                <div className="image__container">
                    <div className="button__container">
                        <button><FontAwesomeIcon icon={faCartShopping}/></button>
                        <button><FontAwesomeIcon icon={faHeart}/></button>
                        <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button> 
                    </div>
                    <img src={"/CartImages/"+images[Math.ceil(Math.random()*11)]} alt="" />
                </div>
                <div className="title__container">
                    <div className="left__container">
                        <p><div className='new'></div> NEW</p>
                    </div>
                    <div className="right__container">
                        <p>$ <span>100.00</span></p>
                    </div>
                </div>
                <div className="intro__container">
                    <p className='title'>Whitney Cropped Pullover Rest Day Sweats Joggers</p> 
                    <p className='brand'>ASUS</p>
                </div>
            </div>
        </div>
        </div> 
    );
};

export default CartTwo;