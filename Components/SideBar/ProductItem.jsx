import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useContext, useState } from 'react';   
import utilsHelper from '../../utils/utils';
import AppContext from '../AppContext';
    
const ProductItem = ({infos}) => {

    const [count, setCount] = useState(infos.infos.quantity);
    const {imagePort,  handleCartProductQuantityDecrease, handleCartProductQuantityIncrease, handleRemoveFromCart, handleAddToHeart} = useContext(AppContext)
    

    let newImages = infos.infos.images.length ? infos.infos.images : [];
    let newImageCollection = [];
    for(let i = 0; i < newImages.length; i ++){
        if(newImages[i].indexOf('ryanscomputers') === -1){
            newImageCollection.push(imagePort+newImages[i])
        }
    }  
    return (
        <div className='product'>
        <div className='image__container'> 
                {/* <img src={"/CartImages/"+images[Math.ceil(Math.random()*11)]}alt='product'/>  */}
                {newImageCollection.length ?  
                        <img src={newImageCollection[0]} alt="" />  :   
                        <img src='/sorry__image.jpg' alt="" /> 
                }
        </div>
        <div className='info__container'>
            <p className='product__title' >{utilsHelper.stringOperations.sideCartStringCutter(infos.infos.title)}</p>  
            <p className='total__price'>PRICE :  { infos.infos.current__price}</p> 
            <p className='total__price'>SUB-TOTAL : {infos.infos.current__price} x {infos.cartInfo.quantity} = {infos.cartInfo.total__current__price}</p> 
            <div className='button__container'>
                <button className='action__button' onClick={()=> handleCartProductQuantityDecrease(infos.infos.product__id , infos.cartInfo.quantity)}>-</button> 
                <button className='action__button count'>{infos.cartInfo.quantity}</button> 
                <button className='action__button' onClick={()=> handleCartProductQuantityIncrease(infos.infos.product__id)}>+</button>
            </div>
            <div className='wish__and__trash__button__container'>
            <button className='product__remove__from__cart__button' onClick={()=>handleRemoveFromCart(infos.infos.product__id)}><FontAwesomeIcon icon={faTrash}/></button>
            <button className='add__in__wishlist' onClick={()=> handleAddToHeart(infos.product__id, infos.child)}><FontAwesomeIcon icon={faHeart}/></button> </div>
        </div>
    </div> 
    );
};

export default ProductItem;