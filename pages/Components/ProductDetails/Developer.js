import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Developer = ({small, detail}) => {
    
    const [detailsShow, setDetailsShow] = useState(1);
    
    let {title, product__id, img__src, previous__price, current__price} = small;
    let {images, specification, overview, details, reviews, QA} = detail;
    
    return (
        <div className='product__details__container'>
            <div className='product__details__header'>
                    <div className='image__container'>
                        <img src={img__src} className='img' alt={title}/>
                        <div className='child__image__container'>
                                {
                                    images.map((info, key) => {
                                        return  <img className='child' src={info} alt='child images'/>
                                    })
                                } 
                                <div className='child'></div>
                        </div>
                    </div>
                    <div className='info__container'>
                        <p className='details__product__title'>{title}</p>
                        <div className='review__container'>
                            <div className='active__review reviews'>
                                <FontAwesomeIcon icon={faStar} className='start__element'/>
                                <FontAwesomeIcon icon={faStar} className='start__element'/>
                                <FontAwesomeIcon icon={faStar} className='start__element'/>
                                <FontAwesomeIcon icon={faStar} className='start__element'/>
                                <FontAwesomeIcon icon={faStar} className='start__element'/>
                            </div>
                            <div className='empty__review reviews'>
                                <FontAwesomeIcon icon={faStar} className='start__element'/>
                                <FontAwesomeIcon icon={faStar} className='start__element'/>
                                <FontAwesomeIcon icon={faStar} className='start__element'/>
                                <FontAwesomeIcon icon={faStar} className='start__element'/>
                                <FontAwesomeIcon icon={faStar} className='start__element'/>
                            </div> 
                        </div>
                        <p className='details__product__id'>Product Id: {product__id}</p>
                        <p className='regular__price'>Regular Price: <span className='price'>{previous__price}</span></p>
                        <p className='details__product__id'>Special Price: {current__price}</p>
                        <p className='details__quick__overview'>Quick Overview</p>
                        <p>                        Laptop Brand - Lenovo<br/>
                        Laptop Series - IdeaPad<br/>
                        Processor Brand - Intel<br/>
                        Processor Type - Intel Core i5<br/>
                        Processor Generation - 11th Gen<br/>
                        Processor Model - Core i5 1135G7<br/>
                        Processor Base Frequency - 2.40 GHz<br/>
                        Processor Max Turbo Frequency - 4.20 GHz</p>
                        <div className='btn__container'>
                            <button className='buy__now'>BUY  NOW</button>
                            <button className='decrease add__or__remove'>-</button>
                            <input className='quantity'type="text" defaultValue='01'/>
                            <button className='increase add__or__remove'>+</button>
                            <button className='add__to__cart'>ADD TO CART</button>
                        </div>
                    </div>
            </div>
            <div className='review__and_details'>
                <div className='button__container'>
                    <button onClick={()=>setDetailsShow(1)} className={detailsShow === 1 ? "active" : ''}>SPECIFICATION</button>
                    <button onClick={()=>setDetailsShow(2)}  className={detailsShow === 2 ? "active" : ''}>DETAILS</button>
                    <button onClick={()=>setDetailsShow(3)}  className={detailsShow === 3 ? "active" : ''}>REVIEW</button>
                    <button onClick={()=>setDetailsShow(4)}  className={detailsShow === 4 ? "active" : ''}>QUESTION &  ANSWER</button>
                </div>
                {detailsShow === 2 ?
                <div className='details__description__container' id='description'>
                    
                </div>
                :""}
                {detailsShow === 1 ? 
                <div className='details__items__container'>
                    <div className='details__item'>
                            <p className='details__header'>general</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className='title'>Brannd</td>
                                        <td className='info'>Brannd helkdkfj kdkjsdkfjsd sdkjsdfklksdfjk skkfsdsdfsd klsadjfklsdf aklsfjsal sadf jkaskj asd f </td>
                                    </tr>
                                    <tr>
                                        <td className='title'>Brannd</td>
                                        <td className='info'>Brannd helkdkfj kdkjsdkfjsd sdkjsdfklksdfjk skkfsdsdfsd klsadjfklsdf aklsfjsal sadf jkaskj asd f </td>
                                    </tr>
                                    <tr>
                                        <td className='title'>Brannd</td>
                                        <td className='info'>Brannd helkdkfj kdkjsdkfjsd sdkjsdfklksdfjk skkfsdsdfsd klsadjfklsdf aklsfjsal sadf jkaskj asd f </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div> 
                </div>  :""}
            </div>
        </div>
    );
};

export default Developer;