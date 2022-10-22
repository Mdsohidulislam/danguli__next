import { faCartShopping, faCodeCompare, faHeart, faMagnifyingGlass, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoadingButton } from '@mui/lab';
import commaNumber from 'comma-number';
import { useRouter } from 'next/router';
import { useContext } from 'react'; 
import utilsHelper from '../../../utils/utils'
import AppContext from '../../AppContext';

const EverydayEssentialsCart = ({infos}) => {
    const {totalCarts,  cLoading, totalHearts, imagePort, handleAddToCart, handleAddToHeart, handleRemoveFromCart, handleRemoveFromHeart} = useContext(AppContext) 
    
    let newImages = infos.infos.images.length ? infos.infos.images : [];
    let newImageCollection = [];
    for(let i = 0; i < newImages.length; i ++){
        if(newImages[i].indexOf('ryanscomputers') === -1){
            newImageCollection.push(imagePort+newImages[i])
        }
    }  

    const router = useRouter();
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

    const showOfferPopup = () => {
        router.push('/CartPage')
        // setOfferProduct(infos);
        // setTimeout(() => {
        //     document.querySelector('.popup__container__for__add__or__remove__offer').classList.toggle('active')
        // }, 100);
    }

    return (
        <div className='cart__nnn__hover__cover'>
                    <div className='cart__nnn__hover '>
        <div className='image__container'>
            <div className='images'>
                {newImageCollection.length ?  
                        <img src={newImageCollection[0]} alt="" onClick={()=> handleDetailsPagePush()} />  :

                        <img src='/sorry__image.jpg' alt=""  onClick={()=> handleDetailsPagePush()} /> 
                }
            </div>
        </div>
        <div  className='info__container'>
            <p className='title'  onClick={()=> handleDetailsPagePush()}>{utilsHelper.stringOperations.stringCutter(infos.infos.title)}  </p> 
            
            <div className='offter__buttons__container'>
                <p className='discount'>save ৳  {commaNumber(infos.infos.previous__price - infos.infos.current__price)}</p>
                {/*  <button className='offer__button hot__deal'>hot deal</button> */}
                <button className='offer__button free__shipping'>free shipping</button>
                <button className='offer__button flash__sale'>flash sale!</button>
                <button className='offer__button bundle'>bundle</button>
                <button className='offer__button coupon'>coupon</button>
            </div>
            <div className='button__and__stock__container'>
                <span className='price'> ৳  {commaNumber(infos.infos.current__price)}</span>
                
                <span className='stock in'>In Stock</span>
                {/* <span className='stock out'>Out Of Stock</span>  */}
            </div>
            <div className='action__button__container'>
            <LoadingButton loading={cLoading} onClick={totalCarts.ides.indexOf(infos.product__id) === -1 ? () => handleAddToCart(infos.product__id, infos.child) : ()=> handleRemoveFromCart(infos.product__id)} className={`${totalCarts.ides.indexOf(infos.product__id) !== -1 ? "remove__from__button__style" : ""}`} title={`${totalCarts.ides.indexOf(infos.product__id) !== -1 ? "remove from cart" : ""}`}><FontAwesomeIcon icon={faCartShopping}/></LoadingButton>
                        <LoadingButton onClick={totalHearts.ides.indexOf(infos.product__id) === -1 ? () => handleAddToHeart(infos.product__id, infos.child) : ()=> handleRemoveFromHeart(infos.product__id)} className={`${totalHearts.ides.indexOf(infos.product__id) !== -1 ? "remove__from__button__style" : ""}`} title={`${totalHearts.ides.indexOf(infos.product__id) !== -1 ? "remove from wishlist" : ""}`}><FontAwesomeIcon icon={faHeart}/></LoadingButton>
                        <LoadingButton onClick={showOfferPopup}><FontAwesomeIcon icon={faMagnifyingGlass}/></LoadingButton>  
            </div>
        </div>
        </div>
        </div>
    );
};

export default EverydayEssentialsCart;