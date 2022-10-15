import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { images } from '../../../Images';

const CartSixNext = ({params}) => {

    const handeViewDetails = () => {
        let element = document.getElementById('info__container'+params);

        element.classList.toggle('active');
    }
    
    return (
        <div className='cart__six__container__next'> 
            <div className="cart__body">
                    <div className="image__container">
                        <img src={"/CartImages/"+images[Math.ceil(Math.random()*11)]} alt="" />
                    </div>
                    <div className="info__container" id={'info__container'+params}>
                        <div className="title">
                            <p className='product__title '>21'' ACER MONITOR</p>
                            <p className='brand'>$ 1200.00</p>
                        </div>
                        <div className="more__view">
                            <button onClick={handeViewDetails}>VIEW MORE +</button>
                        </div>
                        <div className="hidden__info">
                            <button className="show__less" onClick={handeViewDetails}>VIEW LESS -</button>
                            <div className="product__info">
                                <p className='info'><small className='heading'>ITEM | </small> 21'' ACER MONITOR</p>
                                <p className='info'><small className='heading'>MFR | </small>ACER</p>
                                <p className='info'><small className='heading'>MODEL | </small> acer #2s3t</p>
                                <p className='info'><small className='heading'>MSRP | </small>$ 1200.00</p>
                                <p className='info'><small className='heading'>PRICE | </small> $ 800.00</p>
                                <p className='info'><small className='heading'>DESCRIPTION | </small> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, unde? Reiciendis ad eaque fugiat facilis aliquam  </p>
                                <div className="button__container">
                                    <button><FontAwesomeIcon icon={faCartShopping}/></button>
                                    <button><FontAwesomeIcon icon={faHeart}/></button>
                                    <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button> 
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        </div>
    );
};

export default CartSixNext;