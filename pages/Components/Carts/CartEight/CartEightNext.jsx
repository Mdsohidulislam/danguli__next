import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import commaNumber from 'comma-number';
import { useRouter } from 'next/router';
import { useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { uid } from 'uid';
import AppContext from '../../../AppContext';
import { utilsHelper } from '../../../UTILS/utils';

const CartEightNext = ({infos,count, setOfferProduct}) => { 
    const {totalCarts, setTotalCarts, totalHearts, setTotalHearts, handlePrintInfos, imagePort} = useContext(AppContext) 
    
    let newImages = infos.infos.images.length ? infos.infos.images : [];
    let newImageCollection = [];
    for(let i = 0; i < newImages.length; i ++){
        if(newImages[i].indexOf('ryanscomputers') === -1){
            newImageCollection.push(imagePort+newImages[i])
        }
    }  
    

    const showOfferPopup = () => {
        setOfferProduct(infos);
        setTimeout(() => {
            document.querySelector('.popup__container__for__add__or__remove__offer').classList.toggle('active')
        }, 100);
    }

    const handleAddToCart = () => { 
        let user__key = localStorage.getItem('user__key');
        axios.get('http://localhost:3009/getSingleBrowsingProduct',{headers:{user__key , database: 'add__to__cart'}}).then(res => {  
            if(res.data.status__code === 200){
                let {products} = res.data;       
                
                let currentProdeuctIsToCart = productIndexFinder(products, infos.product__id, user__key);
                
                if(currentProdeuctIsToCart === -1){
                    infos.post__time = utilsHelper.timeManagements.momentTimeMaker(); 
                    infos.user__key = localStorage.getItem('user__key');
                    infos.infos.quantity = 1;

                    let wholePrice = infos.infos.current__price / 10; 
                    infos.infos.whole__price = infos.infos.current__price - wholePrice; 

                    axios.post('http://localhost:3009/postSingleBrowsingProduct',{infos, database: 'add__to__cart'}).then(res => {
                        if(res.data.status__code === 200){ 
                            let total__products = [...products, infos] 

                            let twp = 0;
                            let tcp = 0;
                            let tip = 0;
                            let ides =  [];
                            let tq = 0;
                            total__products.forEach((info, index) => { 
                                ides.push(info.product__id)

                                let intwp = info.infos.whole__price * info.infos.quantity;
                                let intcp = info.infos.current__price * info.infos.quantity;
                                let intip =  ( info.infos.current__price / 10) * info.infos.quantity; 
                                    twp += intwp;
                                    tcp += intcp;
                                    tip += intip; 
                                    tq += info.infos.quantity;
                            }) 
                            setTotalCarts({cart: total__products, quantity: tq, ides, total__whole__price: twp, total__current__price: tcp, total__interest__price: tip});
                        }
                    }).catch(err  => {
                        console.log(err.message);
                    }) 
                }else{  
                    axios.delete('http://localhost:3009/deleteSingleBrowsingProduct', {headers: {user__key, product__id: infos.product__id, database: 'add__to__cart'}}).then(res => {
                        let total__products = productDeleter(products, infos.product__id, user__key);
                    
                        let twp = 0;
                        let tcp = 0;
                        let tip = 0;
                        let ides =  [];
                        let tq = 0;
                        total__products.forEach((info, index) => { 
                            ides.push(info.product__id)

                            let intwp = info.infos.whole__price * info.infos.quantity;
                            let intcp = info.infos.current__price * info.infos.quantity;
                            let intip =  ( info.infos.current__price / 10) * info.infos.quantity; 
                                twp += intwp;
                                tcp += intcp;
                                tip += intip; 
                                tq += info.infos.quantity;
                        }) 
                        setTotalCarts({cart: total__products, quantity: tq, ides, total__whole__price: twp, total__current__price: tcp, total__interest__price: tip});
                    }).catch(err => {
                        console.log(err.message);
                    }) 
                }
            }
        }).catch(err => {
            console.log(err);
        })
    }
    const handleAddToHeart = () => {
        let user__key = localStorage.getItem('user__key');
        axios.get('http://localhost:3009/getSingleBrowsingProduct',{headers:{user__key , database: 'add__to__heart'}}).then(res => {  
            if(res.data.status__code === 200){
                let {products} = res.data;       
                
                let currentProdeuctIsToCart = productIndexFinder(products, infos.product__id, user__key);
                
                if(currentProdeuctIsToCart === -1){
                    infos.post__time = utilsHelper.timeManagements.momentTimeMaker(); 
                    infos.user__key = localStorage.getItem('user__key');
                    infos.infos.quantity = 1;

                    let wholePrice = infos.infos.current__price / 10; 
                    infos.infos.whole__price = infos.infos.current__price - wholePrice; 

                    axios.post('http://localhost:3009/postSingleBrowsingProduct',{infos, database: 'add__to__heart'}).then(res => {
                        if(res.data.status__code === 200){ 
                            let total__products = [...products, infos] 

                            let twp = 0;
                            let tcp = 0;
                            let tip = 0;
                            let ides =  [];
                            let tq = 0;
                            total__products.forEach((info, index) => { 
                                ides.push(info.product__id)

                                let intwp = info.infos.whole__price * info.infos.quantity;
                                let intcp = info.infos.current__price * info.infos.quantity;
                                let intip =  ( info.infos.current__price / 10) * info.infos.quantity; 
                                    twp += intwp;
                                    tcp += intcp;
                                    tip += intip; 
                                    tq += info.infos.quantity;
                            }) 
                            setTotalHearts({cart: total__products, quantity: tq, ides, total__whole__price: twp, total__current__price: tcp, total__interest__price: tip});
                        }
                    }).catch(err  => {
                        console.log(err.message);
                    }) 
                }else{  
                    axios.delete('http://localhost:3009/deleteSingleBrowsingProduct', {headers: {user__key, product__id: infos.product__id, database: 'add__to__heart'}}).then(res => {
                        let total__products = productDeleter(products, infos.product__id, user__key);
                    
                        let twp = 0;
                        let tcp = 0;
                        let tip = 0;
                        let ides =  [];
                        let tq = 0;
                        total__products.forEach((info, index) => { 
                            ides.push(info.product__id)

                            let intwp = info.infos.whole__price * info.infos.quantity;
                            let intcp = info.infos.current__price * info.infos.quantity;
                            let intip =  ( info.infos.current__price / 10) * info.infos.quantity; 
                                twp += intwp;
                                tcp += intcp;
                                tip += intip; 
                                tq += info.infos.quantity;
                        }) 
                        setTotalHearts({cart: total__products, quantity: tq, ides, total__whole__price: twp, total__current__price: tcp, total__interest__price: tip});
                    }).catch(err => {
                        console.log(err.message);
                    }) 
                }
            }
        }).catch(err => {
            console.log(err);
        })
    } 
    
    const productIndexFinder = (products, product__id, user__key) => {
        for(var i = 0; i< products.length; i++){
            if(products[i].product__id === product__id && products[i].user__key === user__key){
                return i;
            }
        }
        return -1;
    }
    const productDeleter = (productes, product__id) => {
        let final__products  = []
        for(var i = 0; i < productes.length; i++){
            if(productes[i].product__id !== product__id ){
                final__products.push(productes[i])
            }
        }

        return final__products;
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
 
    return (
        <div className='cart__eight__container__next'> 
            <div className="image__container">
                {/* <img src={"/CartImages/"+images[Math.ceil(Math.random()*11)]}alt='product'/>  */}
                {newImageCollection.length ?  
                        <img src={newImageCollection[0]} alt="" onClick={()=> handleDetailsPagePush()} />  :

                        <img src='/sorry__image.jpg' alt=""  onClick={()=> handleDetailsPagePush()} /> 
                }
                <div className="button__container">
                        <button onClick={handleAddToCart} className={`${totalCarts.ides.indexOf(infos.product__id) !== -1 ? "remove__from__button__style" : ""}`} title={`${totalCarts.ides.indexOf(infos.product__id) !== -1 ? "remove from cart" : ""}`}><FontAwesomeIcon icon={faCartShopping}/></button>
                        <button onClick={handleAddToHeart} className={`${totalHearts.ides.indexOf(infos.product__id) !== -1 ? "remove__from__button__style" : ""}`} title={`${totalHearts.ides.indexOf(infos.product__id) !== -1 ? "remove from wishlist" : ""}`}><FontAwesomeIcon icon={faHeart}/></button>
                        <button onClick={showOfferPopup}><FontAwesomeIcon icon={faMagnifyingGlass}/></button> 
                    </div>
            </div>
            <div className="info__container">
                    <p className='product__title'  onClick={()=> handleDetailsPagePush()}  >{utilsHelper.stringOperations.stringCutter(infos.infos.title)} 
                    </p> 
                
                <p className="price">৳ {commaNumber(infos.infos.current__price)}</p>
                
                <button className='buy__now__link'>buy now</button>  
            </div>
        </div>
    );
};

export default CartEightNext;