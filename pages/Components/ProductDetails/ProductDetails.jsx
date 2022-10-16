import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
    
// import { utilsHelper } from '../../UTILS/utils';
const productDetailsContext = createContext();
const ProductDetails = () => { 

    const [productItem, setProductItem] = useState({});
    const [productDetails, setProductDetails] = useState({});
    const [productOverviews, setProductOverviews] =useState({});
    const [prevQAA, setPrevQAA] = useState([0,1,2,3,4,5,6,7,8,9,10]);
    const [productSpecification, setProductSepcifications] = useState({});
    const [detailsShow, setDetailsShow] = useState(1);
    const [imgSrc,  setImgSrc] = useState({src:null, link: false});
    
    let param = useParams();
    useEffect(()=>{
        let url = param.urls.split('_____')[0]
        let index = param.urls.split('_____')[1]
        axios.get('http://localhost:3009/getsSingleProductDetails',{headers:{url, ID: Number(index)}})
        .then(res => {  
            let {newInfo, newOverviews, newSpecification, newDetails} = res.data.infos;
            console.log({newInfo, newOverviews, newSpecification, newDetails});
                setProductSepcifications(newSpecification);
                setProductDetails(newDetails);
                setProductOverviews(newOverviews);
                setProductItem(newInfo);
                setImgSrc({src:  newInfo.infos.images[0].replace(/\/images\/assests/g, 'http://localhost:3009/images/assests'), link:  true}); 
        }).catch(err => {

            console.log(err.message);
            
        })
    },[]);
    return (
        <h1>Hello world</h1>
    );
};

export { ProductDetails, productDetailsContext };
// export { Developer, productDetailsContext };




// const productDetailsContext = createContext();

// const Developer = ({small, detail}) => {
    


//     const [detailsShow, setDetailsShow] = useState(1); 
//     const {prevQAA, setPrevQAA, prevReview, setPrevReview} = useContext(danguliContext);
//     let {title, product__id, img__src, previous__price, current__price} = small;
//     let {images, specification, overview, details} = detail;
//     const [imgSrc, setImgSrc] = useState(img__src);
    
//     useEffect(()=>{
//             getAllData('review');
//     },[])
    
//     const getAllData =  ( ) => {
//         axios.get('http://localhost:3009/getQuestionById',{headers:{id: product__id}})
//         .then(res => { 
//             let result = res.data.result;
//             if(result.length){
//                 setPrevQAA(result);
//             }
//         }).catch(err => {
//             console.log(err.message);
//             setPrevQAA([])
//         })
//     } 

//     return (
//         <productDetailsContext.Provider value={{images, setImgSrc}}>
//         {title? 
//         <div className='product__details__container'>
//             <div className='product__details__header'>
//                     <div className='image__container'>
//                         <ImageZoom imgSrc={imgSrc}/>
//                         <div className='child__image__container'>
//                                 <SimpleSlider/>
//                         </div>
//                     </div>
//                     <div className='info__container'>
//                         <p className='details__product__title'>{title}</p> 
//                         <ReviewStar/>
//                         <p className='details__product__id'>Product Id: {product__id}</p>
//                         <p className='regular__price'>Regular Price: <span className='price'>{previous__price}</span></p>
//                         <p className='details__product__id'>Special Price: {current__price}</p>
//                         <p className='details__quick__overview'>Quick Overview</p>
//                             <p dangerouslySetInnerHTML={{__html: overview}}></p>
//                         <div className='btn__container'>
//                             <button className='buy__now'>BUY  NOW</button>
//                             <button className='decrease add__or__remove'>-</button>
//                             <input className='quantity'type="text" defaultValue='01'/>
//                             <button className='increase add__or__remove'>+</button>
//                             <button className='add__to__cart'>ADD TO CART</button>
//                         </div>
//                     </div>
//             </div>
//             <div className='review__and_details'>
//                 <div className='button__container'>
//                     <button onClick={()=>setDetailsShow(1)} className={detailsShow === 1 ? "active" : ''}>SPECIFICATION</button>
//                     <button onClick={()=>setDetailsShow(2)}  className={detailsShow === 2 ? "active" : ''}>DETAILS</button>
//                     <button onClick={()=>setDetailsShow(3)}  className={detailsShow === 3 ? "active" : ''}>REVIEW</button>
//                     <button onClick={()=>setDetailsShow(4)}  className={detailsShow === 4 ? "active" : ''}>QUESTION &  ANSWER</button>
//                 </div>
//                 {detailsShow === 1 ? 
//                 <div className='details__items__container'>
//                     {
//                         specification.map((info, index) => {
//                             return <Specification info={info} key={index}/>
//                         })
//                     }
//                 </div>  :""}
//                 {detailsShow === 2 ?
//                     <div className='details__description__container' dangerouslySetInnerHTML={{__html: details}}> 
//                     </div>
//                     :""}
//                 {detailsShow === 3 ?
//                 <div className='product__review__items__container' id='product__review'> 
//                     <Review/>
//                     <Review/>
//                     <Review/>
//                     <Review/>
//                     <Review/>
//                     <Review/>
//                     <Review/> 
//                     <ReviewForm/>
//                 </div>   :""}
//                 {detailsShow === 4  ?
                    
//                     <div className='question__and__ans__container'>
//                         {prevQAA.length? 
//                         <div>
//                             {
//                                 prevQAA.map((info, index) =>{
//                                     return <QAndA key={index} info={info}/>
//                                 })
//                             }
                             
//                         </div> :""}
//                         <QuestonForm productId={product__id}/>
//                  </div> 
//                     :""}
                    
//             </div> 
                    
//         </div> :
//         <div style={{height:'4000px'}}></div>
//     }
//         </productDetailsContext.Provider> 
//     );
// };

















// import React, { useState } from 'react';
// import QAndA from './Asisst/QAndA';
// import QuestonForm from './Asisst/QuestonForm';
// import Review from './Asisst/Review';
// import ReviewForm from './Asisst/ReviewForm';
// import ReviewStar from './Asisst/ReviewStar';
// import Specification from './Asisst/Specification';

// const ProductDetails = () => {
//     const [detailsShow, setDetailsShow] = useState(1);

//     return (
//         <div className='product__details__container'>
//             <div className='product__details__header'>
//                     <div className='image__container'>
//                         <img src='/dinner.png' className='img' alt='to-night-dinner'/>
//                         <div className='child__image__container'>
//                                 <img className='child' src='/dinner.png' alt='to-night-dinner'/>
//                                 <img className='child' src='/dinner.png' alt='to-night-dinner'/>
//                                 <img className='child' src='/dinner.png' alt='to-night-dinner'/>
//                                 <div className='child'></div>
//                         </div>
//                     </div>
//                     <div className='info__container'>
//                         <p className='details__product__title'>HP Envy 13-ba1023tx Intel Core i7 1165G7 13.3 Inch FHD Display Silver Laptop</p>
//                         <ReviewStar/>
//                         <p className='details__product__id'>Product Id: 33.33.100.92</p>
//                         <p className='regular__price'>Regular Price: <span className='price'>44,400.00</span></p>
//                         <p className='details__product__id'>Special Price: 41,400.00</p>
//                         <p className='details__quick__overview'>Quick Overview</p>
//                         <p>                        Laptop Brand - Lenovo<br/>
//                         Laptop Series - IdeaPad<br/>
//                         Processor Brand - Intel<br/>
//                         Processor Type - Intel Core i5<br/>
//                         Processor Generation - 11th Gen<br/>
//                         Processor Model - Core i5 1135G7<br/>
//                         Processor Base Frequency - 2.40 GHz<br/>
//                         Processor Max Turbo Frequency - 4.20 GHz</p>
//                         <div className='btn__container'>
//                             <button className='buy__now'>BUY  NOW</button>
//                             <button className='decrease add__or__remove'>-</button>
//                             <input className='quantity'type="text" defaultValue='01'/>
//                             <button className='increase add__or__remove'>+</button>
//                             <button className='add__to__cart'>ADD TO CART</button>
//                         </div>
//                     </div>
//             </div>
//             <div className='review__and_details'>
//                 <div className='button__container'>
//                     <button className='active'>SPECIFICATION</button>
//                     <button>DETAILS</button>
//                     <button>REVIEW</button>
//                     <button>QUESTION &  ANSWER</button>
//                 </div>

                
//                 <div className='question__and__ans__container'>
//                     <QAndA/>
//                     <QAndA/>
//                     <QAndA/>
//                     <QAndA/>
//                     <QAndA/>
//                     <QAndA/>
//                     <QAndA/>
//                     <QAndA/>
//                     <QAndA/>
//                     <QuestonForm/>
//                 </div>
//                 <div className='product__review__items__container' id='product__review'> 
//                     <Review/>
//                     <Review/>
//                     <Review/>
//                     <Review/>
//                     <Review/>
//                     <Review/>
//                     <Review/> 
//                     <ReviewForm/>
//                 </div> 
//                 <div className='details__description__container' id='description'> 
//                 </div> 
//                 <div className='details__items__container'>
//                         <Specification/>
//                         <Specification/>
//                         <Specification/>
//                         <Specification/>
//                         <Specification/>
//                         <Specification/>
//                         <Specification/>
//                 </div> 
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;