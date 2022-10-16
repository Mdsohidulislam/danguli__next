import { faCartShopping, faHeart, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { danguliContext } from '../../../DanguliContext';
import SearchEngine from '../../../UTILS/SearchEngineUtils';
import { utilsHelper } from '../../../UTILS/utils';
const CartOne = ({infos}) => {

    
    const {products,  wishlist, setWishlist,cart, setCart,compareList, setCompareList,wishlistId, setWishlistId,cartId, setCartId,compareListId, setCompareListId,  setCartTotalInfo  } = useContext(danguliContext)
    
    const handleAddToCart = (id) => {
        
        let allStorageCart = JSON.parse(localStorage.getItem('all__cart')) || [];


        let result = SearchEngine.productFinder(id, products);

        if(cartId.indexOf(result.product__id) === -1){
            let newCart = [...cart];
            let newCartId = [...cartId];
                result.quantity = 1;  
                newCart.push(result);
                setCart(newCart);
                newCartId.push(result.product__id);
                setCartId(newCartId)
                allStorageCart.push({id: result.product__id, quantity: result.quantity, price: result.current__price});
                localStorage.setItem('all__cart', JSON.stringify(allStorageCart));
                setCartTotalInfo(utilsHelper.calculators.totalCartAccounting());
        }else{
            let newCart = [...cart]; 
            let index = cartId.indexOf(id);
            let currentProduct = newCart[index];
                currentProduct.quantity = currentProduct.quantity + 1; 
                newCart[index] =  currentProduct;
                setCart(newCart);  
                allStorageCart[index].quantity = currentProduct.quantity;
                localStorage.setItem('all__cart', JSON.stringify(allStorageCart));
                setCartTotalInfo(utilsHelper.calculators.totalCartAccounting());
        }
    }

    const handleAddOrRemoveFromWishlist = (id) => {

        let allStorageWish = JSON.parse(localStorage.getItem('all__wish')) || [];
        
        let result =SearchEngine.productFinder(id, products);
        
        if(wishlistId.indexOf(result.product__id) === -1){
            let newCart = [...wishlist];
            let newCartId = [...wishlistId];  
                newCart.push(result);
                setWishlist(newCart);
                newCartId.push(result.product__id);
                setWishlistId(newCartId)

                allStorageWish.push({id: result.product__id, quantity: 1});
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
    
    const handleAddOrRemoveFromComparelist = (id) => {

        let allStorageCompare = JSON.parse(localStorage.getItem('all__compare')) || [];

        let result =SearchEngine.productFinder(id, products);   
        
        if(compareListId.indexOf(result.product__id) === -1){
            let newCompareList = [...compareList];
            let newCompareListId = [...compareListId];  
                newCompareList.push(result);
                setCompareList(newCompareList);
                newCompareListId.push(result.product__id);
                setCompareListId(newCompareListId);

                allStorageCompare.push({id: result.product__id, quantity: 1});
                localStorage.setItem('all__compare', JSON.stringify(allStorageCompare));
                
        }else{ 
            let index = wishlistId.indexOf(id);
            let newCompareList = [...compareList];
            let newCompareListId = [...compareListId];
            newCompareList.splice(index, 1);
            newCompareListId.splice(index, 1);
            
            setCompareList(newCompareList);
            setCompareListId(newCompareListId);
            
            allStorageCompare.splice(index, 1);
            localStorage.setItem('all__compare', JSON.stringify(allStorageCompare));
        }
    }
    return (
        <div className='main__cart__container__long__product'>
            <div className="container">
                <div className="image__container"> 
                    <Link to={`/product/details/${infos.product__id}`}>
                        <img src={infos.img__src} alt={infos.title}  title={infos.title} />
                    </Link>
                </div>
                <div className="title__container">
                        <div className="left__container">
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        <div className="right__container">
                            <p>৳ <span>{infos.current__price}</span></p>
                        </div>
                </div>
                <div className="inf__body">
                    <div className="intro__container">
                        <p className='title'>{utilsHelper.stringOperations.stringCutter(infos.title)}</p> 
                        <p className='brand'>{infos.category}</p>
                    </div>
                    <div className="button__container">
                        <button className={cartId.indexOf(infos.product__id) !== -1 ? "btn__success" : ''} onClick={()=> handleAddToCart(infos.product__id)}><FontAwesomeIcon icon={faCartShopping}/></button>
                        <button onClick={()=> handleAddOrRemoveFromWishlist(infos.product__id)}  className={wishlistId.indexOf(infos.product__id) !== -1 ? "btn__danger" : ''} ><FontAwesomeIcon icon={faHeart}/></button>
                        <button onClick={()=> handleAddOrRemoveFromComparelist(infos.product__id)}  className={compareListId.indexOf(infos.product__id) !== -1 ? "btn__danger" : ''}><FontAwesomeIcon icon={faScaleBalanced}/></button> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartOne;