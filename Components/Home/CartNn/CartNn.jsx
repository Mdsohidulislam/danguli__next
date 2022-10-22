import { faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { danguliContext } from '../../../DanguliContext';
import { utilsHelper } from '../../../UTILS/utils';

const CartNn = ({infos}) => {

    const {serverPort,  wishlist, setWishlist,cart, setCart,wishlistId, setWishlistId,cartId, setCartId,  setCartTotalInfo ,  setShowOption ,  setShowUpdateInput ,  setUpdateInfos } = useContext(danguliContext);
    
    const {title, current__price, previous__price, images, img__src, product__id} = infos.infos;
    const [doneCopy, setDoneCopy] = useState(false);
    const [uCom, setUCom] = useState('');
    const [editMode, setEditMode] = useState(true);
    

    const handleAddToCart = (id) => {
        
        let allStorageCart = JSON.parse(localStorage.getItem('all__cart')) || [];

        if(cartId.indexOf(infos.product__id) === -1){
            let newCart = [...cart];
            let newCartId = [...cartId];
            let newAddCartInfo = {...infos};
                newAddCartInfo.infos.quantity = 1;  
                newCart.push(newAddCartInfo);
                setCart(newCart);
                newCartId.push(infos.product__id);
                setCartId(newCartId)
                allStorageCart.push({id: infos.product__id, quantity: newAddCartInfo.infos.quantity, price: infos.infos.current__price});
                localStorage.setItem('all__cart', JSON.stringify(allStorageCart));
                setCartTotalInfo(utilsHelper.calculators.totalCartAccounting());
        }else{
            let index = cartId.indexOf(id);
            let newCart = [...cart];
            let newCartId = [...cartId];
            newCart.splice(index, 1);
            newCartId.splice(index, 1);
        
                setCart(newCart);
                setCartId(newCartId);

                allStorageCart.splice(index, 1);
                localStorage.setItem('all__cart', JSON.stringify(allStorageCart));
        }
    }
    

    const handleCopyToClipboard = (str) => {
        let element = document.createElement('textarea');
            element.value  = str;
            document.body.appendChild(element);
            element.select();
            document.execCommand('copy');
            document.body.removeChild(element);
            setDoneCopy(true);

            setTimeout(() => {
                setDoneCopy(false);
            }, 800);
    }

    
    const handleUpdateBundle  = (name, info, id, product__id, surname) => {
        setShowUpdateInput(true);
        setUpdateInfos({name, info, id, product__id, surname, grand: infos.parent__father});
        setTimeout(() => { 
            document.getElementById('user__guide__input__container').classList.toggle('active');
            document.querySelector('body').classList.toggle('active'); 
        }, 100); 

        console.log(infos.ID);
        
        // axios.get('http://localhost:3009/getProductByGrandAndId', {headers:{product__id, grand: infos.parent__father}})
        // .then(res  => {
        //     console.log(res);
        // }).catch((err) => {
        //     console.log(err.message);
        // })
    }
    
    
    const handleUpdateTrueOrFalse = (name, info, id, product__id, surname) => {
        setShowOption(true);
        setUpdateInfos({name, info, id, product__id, surname})
        setTimeout(() => {
            document.getElementById('user__guide__option__container').classList.toggle('active');
            document.querySelector('body').classList.toggle('active'); 
        }, 100);
    }
    
    const handleAddOrRemoveFromWishlist = (id) => {

        let allStorageWish = JSON.parse(localStorage.getItem('all__wish')) || [];

        
        if(wishlistId.indexOf(infos.product__id) === -1){
            let newCart = [...wishlist];
            let newCartId = [...wishlistId];  
                newCart.push(infos);
                setWishlist(newCart);
                newCartId.push(infos.product__id);
                setWishlistId(newCartId)
                
                allStorageWish.push({id: infos.product__id, quantity: 1});
                localStorage.setItem('all__wish', JSON.stringify(allStorageWish));
        }else{ 
            let index = wishlistId.indexOf(id);
            let newWishlist = [...wishlist];
            let newWishlistId = [...wishlistId];
                newWishlist.splice(index, 1);
                newWishlistId.splice(index, 1);
            
                setWishlist(newWishlist);
                setWishlistId(newWishlistId);

                allStorageWish.splice(index, 1);
                localStorage.setItem('all__wish', JSON.stringify(allStorageWish));
        }
    } 
    const handleUploadOfferProduct = () => {
        console.log(infos);
        infos.views = 10; 
        infos.post__time = utilsHelper.timeManagements.momentTimeMaker(); 
        axios.post('http://localhost:3009/postSingleOfferProduct',{infos, database: 'best__rated'}).then(res => {
            console.log(res);
        }).catch(err  => {
            console.log(err.message);
        })
    }
    
    
    return (
        <div className='cart__nnn'>
        <div className='image__container'>
            <div className='images'>
                <Link to={`/${infos.visible__url}_-_${infos.parent__father}`}>
                    <img src={ images[0].replace(/\/images\/assests/g, 'http://localhost:3009/images/assests')} alt={title}/>
                </Link>
                <Link to={`/${infos.visible__url}_-_${infos.parent__father}`}>
                <img src={images[1] !== undefined ? serverPort + images[1] : img__src} alt={title}/>
                </Link>
            </div>
        </div>
        <div  className='info__container'>
            <div className='title__container'>
                <Link to={`/${infos.visible__url}_-_${infos.parent__father}`} className='title'>helllo wor{utilsHelper.stringOperations.cartNnStringCutter(title)}</Link>
            </div> 
            <div className='offter__buttons__container'>
                {/*<p className='discount'>save ৳ {previous__price - current__price}</p>*/}
                <p className='discount'>{infos.user__guide.bundle.active? ('SAVE  ' + infos.user__guide.bundle.discount  + "  %") : ("SAVE " + (previous__price - current__price) + " ৳ ")}</p>
                {infos.user__guide.hot__deal ? <button className='offer__button hot__deal'>hot deal</button> : ''} 
                {infos.user__guide.free__shipping ?  <button className='offer__button free__shipping'>free shipping</button> : ''} 
                {infos.user__guide.flash__sale ?  <button className='offer__button flash__sale'>flash sale!</button> : ''}
                {infos.user__guide.bundle.active ? <button className='offer__button bundle'>bundle</button>: ''} 
            </div>
            <div className='button__and__stock__container'>
                <span className='price'>{infos.user__guide.bundle.active? ('৳  ' + infos.user__guide.bundle.currentPrice) : ("৳ " + (current__price))}</span>
                
                <span className='stock in'>In Stock</span>
                {/* <span className='stock out'>Out Of Stock</span>  */}
            </div>
            <div className='action__button__container'>
                <button  className={cartId.indexOf(product__id) !== -1 ? "btn__danger" : ''} onClick={()=>handleAddToCart(product__id)}> <FontAwesomeIcon icon={faShoppingCart}/> </button>
                <button className={wishlistId.indexOf(product__id) !== -1 ? "btn__danger" : ''} onClick={()=> handleAddOrRemoveFromWishlist(product__id)}> <FontAwesomeIcon icon={faHeart}/> </button>
                <button onClick={handleUploadOfferProduct}> <FontAwesomeIcon icon={faSearch}/> </button>
            </div>
            {editMode? 
            <div className='admin__action__container'>
                <div className='edit__container'> 
                    <div className='button__container'>
                    <button className={infos.user__guide.hot__deal ? "active__user__guide__button": ""} onClick={()=> handleUpdateTrueOrFalse('hot__deal', infos.user__guide, infos.ID, product__id, 'hot deal')}>hot deal</button> 
                    <button className={infos.user__guide.free__shipping ? "active__user__guide__button": ""} onClick={()=> handleUpdateTrueOrFalse('free__shipping', infos.user__guide, infos.ID, product__id, 'free shipping')}>free shipping</button>
                    <button className={infos.user__guide.flash__sale ? "active__user__guide__button": ""} onClick={()=> handleUpdateTrueOrFalse('flash__sale', infos.user__guide, infos.ID, product__id, 'flash  sale')}>flash sale</button>
                    <button className={infos.user__guide.bundle.active ? "active__user__guide__button": ""} onClick={()=> handleUpdateBundle('bundle', infos.user__guide, infos.ID, product__id, 'bundle  ')}>bundle</button>
                    <button className={infos.user__guide.Recommended ? "active__user__guide__button": ""} onClick={()=> handleUpdateTrueOrFalse('Recommended', infos.user__guide, infos.ID, product__id, 'Recommended  ')}>Recommended</button>
                    <button className={infos.user__guide.most__popular ? "active__user__guide__button": ""} onClick={()=> handleUpdateTrueOrFalse('most__popular', infos.user__guide, infos.ID, product__id, 'most  popular')}>most popular </button>
                    <button className={infos.user__guide.new__arrival ? "active__user__guide__button": ""} onClick={()=> handleUpdateTrueOrFalse('new__arrival', infos.user__guide, infos.ID, product__id, 'new  arrival')}>new arrival</button>
                    <button className={infos.user__guide.top__review ? "active__user__guide__button": ""} onClick={()=> handleUpdateTrueOrFalse('top__review', infos.user__guide, infos.ID, product__id, 'top  review')}>top review</button>
                    <button className={infos.user__guide.resent__sell ? "active__user__guide__button": ""} onClick={()=> handleUpdateTrueOrFalse('resent__sell', infos.user__guide, infos.ID, product__id, 'resent  sell')}>recent sale</button>
                    <button className={infos.user__guide.you__link ? "active__user__guide__button": ""} onClick={()=> handleUpdateTrueOrFalse('you__link', infos.user__guide, infos.ID, product__id, 'you like')}>you like</button>
                    <button className={infos.user__guide.featured ? "active__user__guide__button": ""} onClick={()=> handleUpdateTrueOrFalse('featured', infos.user__guide, infos.ID, product__id, 'featured  ')}>featured</button>
                    <button className={infos.user__guide.top__seller ? "active__user__guide__button": ""} onClick={()=> handleUpdateTrueOrFalse('top__seller', infos.user__guide, infos.ID, product__id, 'top  seller')}>top seller</button>
                    <button className={infos.user__guide.innovated__gadget ? "active__user__guide__button": ""} onClick={()=> handleUpdateTrueOrFalse('innovated__gadget', infos.user__guide, infos.ID, product__id, 'innovated  gadget')}>innovated gadget</button>
                    <button onClick={()=> handleCopyToClipboard(`${infos.parent__father}=====${product__id}`)}>{!doneCopy?  'path' : "copied"}</button>
                    </div>
                </div>
            </div>:""}
        </div>
    </div>
    );
};

export default CartNn;