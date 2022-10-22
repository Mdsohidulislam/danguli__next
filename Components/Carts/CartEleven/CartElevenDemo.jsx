import { faCartShopping, faCodeCompare, faHeart, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'; 
import { uid } from 'uid';
import utilsHelper from '../../../utils/utils';
import AppContext from '../../AppContext';

const CartElevenDemo = ({infos}) => {

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
            <div className='cart__eleven__container'>
                <div className="image__container"> 
                {newImageCollection.length ?  
                        <img src={newImageCollection[0]} alt={infos.visible__url} onClick={()=> handleDetailsPagePush()} />  :

                        <img src='/sorry__image.jpg' alt={infos.visible__url}  onClick={()=> handleDetailsPagePush()} /> 
                }    
            <div className='button__container'>
                <button  loading={cLoading} onClick={totalCarts.ides.indexOf(infos.product__id) === -1 ? () => handleAddToCart(infos.product__id, infos.child) : ()=> handleRemoveFromCart(infos.product__id)} className={`${totalCarts.ides.indexOf(infos.product__id) !== -1 ? "remove__from__button__style" : ""}`} title={`${totalCarts.ides.indexOf(infos.product__id) !== -1 ? "remove from cart" : ""}`}> <FontAwesomeIcon icon={faCartShopping}/> </button>
                <button><FontAwesomeIcon icon={faSearch}/></button>
                <button><FontAwesomeIcon icon={faCodeCompare}/></button>
                <button onClick={()=>handleRemoveFromHeart(infos.product__id)}><FontAwesomeIcon icon={faTrash}/></button>
            </div>
                </div>
                <div className="info__container">
                    <hr className="top" />
                    <p className='product__category'>{infos.brand}</p>
                    <p className="product__title" onClick={handleDetailsPagePush}>{utilsHelper.stringOperations.stringCutter(infos.infos.title)}</p>
                    <div className="current__price__next" style={{background:'none'}}>৳  {infos.infos.current__price}<span className="prev__price">৳ {infos.infos.previous__price}</span></div> 
                    <hr className="bottom" />
                </div> 
            </div>  
    );  
};

export default CartElevenDemo;