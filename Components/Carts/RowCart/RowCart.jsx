import { faHeart, faInfoCircle, faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { uid } from 'uid'; 
import AppContext from '../../AppContext';

const RowCart = ({infos}) => { 
    const {imagePort} = useContext(AppContext);
    const [currentProductQuantity, setCurrentProductQuantity]  = useState(0);
    const handleCurrentProductQuntityDecrease  =  () => { 
        if(currentProductQuantity > 0){
            setCurrentProductQuantity(currentProductQuantity - 1)
        }
    }
    const handleCurrentProductQuntityIncrease  =  () => { 
        if(currentProductQuantity < 10){
            setCurrentProductQuantity(currentProductQuantity + 1)
        }
    } 
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

    return (
        <div className='row__cart__container'>
            <div className='image__container'>
                {newImageCollection.length ?  
                        <img src={newImageCollection[0]} alt="" onClick={()=> handleDetailsPagePush()} />  :

                        <img src='/sorry__image.jpg' alt=""  onClick={()=> handleDetailsPagePush()} /> 
                }
            </div>
            <div className='info__container'>
                <div className='btn__container'>
                    <div className='add__remove__btn__container'>
                        <button onClick={handleCurrentProductQuntityDecrease}><FontAwesomeIcon icon={faMinus}/></button>
                        <button className='quantity'>{currentProductQuantity}</button>
                        <button onClick={handleCurrentProductQuntityIncrease}><FontAwesomeIcon icon={faPlus}/></button>
                    </div>
                    <div className='add__remove__btn__container'>
                        <button><FontAwesomeIcon icon={faShoppingCart}/></button>
                        <button><FontAwesomeIcon icon={faInfoCircle}/></button>
                        <button><FontAwesomeIcon icon={faHeart}/></button>
                    </div>
                </div>
                <p className='info__title' onClick={()=>handleDetailsPagePush()}>{infos.infos.title}</p>
                <p className='info__parent__product__id'><span className='bold bold__product__id'>Product Id : </span><span className='info info__product__id'>{infos.product__id}</span></p>
                <p className='info__parent__current__price'><span className='bold bold__current__price'>Price : </span><span className='info info__current__price'>{infos.infos.current__price} ৳</span></p>
                <p className='info__parent__save__price'><span className='bold bold__save__price'>Save : </span><span className='info info__save__price'>{infos.infos.previous__price - infos.infos.current__price} ৳</span></p>
                <p className='info__previous__price__parent'><span className='bold bold__previous__price'>Previous Price : </span><span className='info info__previous__price'>{infos.infos.previous__price} ৳</span></p>
            </div>
        </div>
    );
};

export default RowCart;