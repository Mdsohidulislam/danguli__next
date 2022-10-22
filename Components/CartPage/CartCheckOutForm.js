import { useRouter } from 'next/router';
import { useContext } from 'react';  
import active__utils from '../../utils/Active__utils';
import AppContext from '../AppContext';

const CartCheckOutForm = ({showRemoveButton, quantity, price}) => {
    const {totalCarts} = useContext(AppContext);
    const handleVoucherCodeSubmit = (e) => {
        e.preventDefault();
    }
    // const {showRemoveButton} = params;
    const router = useRouter();

    const handleToggleSmallCart = () => {
        active__utils.active__cart();
    }
    return (
        <div className='checkout__and__voucher__container'> 
            <div className='total__price'>
                <p>TOTAL ({quantity}) : </p>
                <p>৳: {price}</p>
            </div>
            <form onSubmit={handleVoucherCodeSubmit} className='voucher__form'>
                <input type='text' placeholder='Enter voucher code' name='voucher__code'/>
                <button type='submit'>Apply</button> 
            </form>
            <button className='checkout__button w__next__100'>Checkout</button>
            {showRemoveButton?
                
            <button onClick={handleToggleSmallCart} className=' w__next__100 continue__shopping__button'>Continue Shopping</button>  
            
            : 
            
            <button className='w__next__100 continue__shopping__button' onClick={handleToggleSmallCart}>Continue Shopping</button> }
        </div>
    );
};

export default CartCheckOutForm;