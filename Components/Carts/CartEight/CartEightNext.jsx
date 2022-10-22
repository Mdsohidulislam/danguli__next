import { faCartShopping, faCodeCompare, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import commaNumber from 'comma-number';
import { useRouter } from 'next/router';
import { useContext } from 'react';  
import { uid } from 'uid';   
import utilsHelper from '../../../utils/utils';
import AppContext from '../../AppContext';


const CartEightNext = ({infos,count, setOfferProduct}) => { 
    const router = useRouter();

    const {totalCarts,  cLoading, totalHearts, imagePort, handleAddToCart, handleAddToHeart, handleRemoveFromCart, handleRemoveFromHeart} = useContext(AppContext) 
    
    let newImages = infos.infos.images.length ? infos.infos.images : [];
    let newImageCollection = [];
    for(let i = 0; i < newImages.length; i ++){
        if(newImages[i].indexOf('ryanscomputers') === -1){
            newImageCollection.push(imagePort+newImages[i])
        }
    }  
    

    const showOfferPopup = () => {
        router.push('/CartPage')
        // setOfferProduct(infos);
        // setTimeout(() => {
        //     document.querySelector('.popup__container__for__add__or__remove__offer').classList.toggle('active')
        // }, 100);
    }
    

    const handleDetailsPagePush = () => {
        router.push({
            pathname:'/details',
            query: {
                url: infos.visible__url,
                id: infos.product__id,
                category: infos.parent__father,
                afk: uid(10)
            }
        })
    }
    
    return (
        <div className='cart__eight__container__next'> 
            <div className="image__container">
                {/* <img src={"/CartImages/"+images[Math.ceil(Math.random()*11)]}alt='product'/>  */}
                {newImageCollection.length ?  
                        <img src={newImageCollection[0]} alt="" onClick={()=> handleDetailsPagePush()} />  :

                        <img src='/sorry__image.jpg' alt=""  onClick={()=> handleDetailsPagePush()} /> 
                }
                <div className="button__container">
                        <LoadingButton loading={cLoading} onClick={totalCarts.ides.indexOf(infos.product__id) === -1 ? () => handleAddToCart(infos.product__id, infos.child) : ()=> handleRemoveFromCart(infos.product__id)} className={`${totalCarts.ides.indexOf(infos.product__id) !== -1 ? "remove__from__button__style" : ""}`} title={`${totalCarts.ides.indexOf(infos.product__id) !== -1 ? "remove from cart" : ""}`}><FontAwesomeIcon icon={faCartShopping}/></LoadingButton>
                        <LoadingButton onClick={totalHearts.ides.indexOf(infos.product__id) === -1 ? () => handleAddToHeart(infos.product__id, infos.child) : ()=> handleRemoveFromHeart(infos.product__id)} className={`${totalHearts.ides.indexOf(infos.product__id) !== -1 ? "remove__from__button__style" : ""}`} title={`${totalHearts.ides.indexOf(infos.product__id) !== -1 ? "remove from wishlist" : ""}`}><FontAwesomeIcon icon={faHeart}/></LoadingButton>
                        <LoadingButton onClick={showOfferPopup}><FontAwesomeIcon icon={faMagnifyingGlass}/></LoadingButton>  
                    </div>
            </div>
            <div className="info__container">
                    <p className='product__title'  onClick={()=> handleDetailsPagePush()}  >{infos.product__id} --- {utilsHelper.stringOperations.stringCutter(infos.infos.title)}  </p> 
                
                <p className="price">৳ {commaNumber(infos.infos.current__price)}</p>
                
                <button className='buy__now__link'>buy now</button>  
            </div>
        </div>
    );
};

export default CartEightNext;