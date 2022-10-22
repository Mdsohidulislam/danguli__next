import { useContext } from 'react';  
import AppContext from '../AppContext';
import ProductItem from '../SideBar/ProductItem';
import CartCheckOutForm from './CartCheckOutForm';
import CartPageItem from './CartPageItem';


const HeartPage = () => {
    
    const {totalHearts} = useContext(AppContext); // current

    const handleVoucherCodeSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
        <div className='cart__item__small__product__view'>
        <p className='item__header'>Cart Saved Items</p>
        {
            totalHearts.cart.map((info, index) => {
                return <ProductItem key={index} infos={info}/>
            })
        } 
        <CartCheckOutForm  quantity={totalHearts.quantity} price={totalHearts.total__current__price}  showRemoveButton={false}/>
        </div> 
            <div className='cart__page__container'> 
                <div className='container__next__container'>
                    <div  className='head__container'>
                        <p>ITEM</p>
                        <p className='center'>QUANTITY</p> 
                        <p className='center'>SUBTOTAL</p> 
                    </div> 
                    {totalHearts.cart.length?
                    <div className='items__container'>
                        
                        {
                            totalHearts.cart.map((info, index) => {
                                return <CartPageItem key={index} infos={info}/> 
                            })
                        }
                    </div>  :""} 
                    <div className='product__bottom__cart'>
                        <button className='btn__next__center continue__shopping'>Continue Shopping</button>
                        <p className='total'>TOTAL ({totalHearts.quantity})</p>
                        <p className='total'>৳ :  {totalHearts.total__current__price}</p>
                    </div>
                    <div className='checkout__and__payment__log'>
                        <div className='image__container'>
                            <img src='/pay__one.png' alt='payment logo one'></img>
                            <img src='/pay__two.png' alt='payment logo one'></img>
                        </div>
                        <CartCheckOutForm  quantity={totalHearts.quantity} price={totalHearts.total__current__price}  showRemoveButton={false}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeartPage;