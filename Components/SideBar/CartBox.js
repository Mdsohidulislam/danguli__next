import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useContext } from 'react'; 
import active__utils from '../../utils/Active__utils';
import AppContext from '../AppContext';
import CartCheckOutForm from '../CartPage/CartCheckOutForm';
import ProductItem from './ProductItem';
    /// current
// this components style writing in sidebar.globals.scss file
const CartBox = () => { 
    const router = useRouter();
    const {totalCarts, setTotalCarts} = useContext(AppContext);

    const handleSmallCart = () => {
        active__utils.active__cart();
    }
    
    const goCartPage = () => {
        active__utils.active__cart();
        router.push('/Cart')
    }


    return (
        <div className='my__cart__box__container' id='my__side__small__cart'>
        <div className='second__banner'>
        </div>
            <div className='side__cart__container'>
                <div className='cart__header'>
                    <p onClick={goCartPage}>YOUR CART</p>
                    <button onClick={handleSmallCart}><FontAwesomeIcon icon={faXmark}/></button>

                </div>
                {totalCarts.cart.length? 
                <div  className='products__container'>
                    {
                        totalCarts.cart.map((info, index) => {
                            return <ProductItem key={index} infos={info}/>
                        })
                    } 
                    <div className='product__total__info'>
                    <CartCheckOutForm quantity={totalCarts.quantity} price={totalCarts.total__current__price} showRemoveButton={true}/> 
                    </div> 
                </div> :""}
            </div>
        </div>
    );
};

export default CartBox;