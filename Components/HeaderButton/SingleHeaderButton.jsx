import { useState } from 'react';
import SameBrandViews from './DetailsViews/SameBrandViews';


const SingleHeaderButton = ({infos}) => {
    let {sameBrandProducts, similarProducts} = infos;
    const [singleButton , setSingleButton] = useState(2);
    return (
        <div className='details__same__brand__top__container'>
            <div className='single__header__button__container'>
                <div  className='button__container__header'>
                    <div className='left__button__container'>
                        <button onClick={()=> setSingleButton(1)} className={singleButton === 1 ? 'item item__button__active' : "item"}>Similar Products <span className='button__anchor'></span></button>
                        <button onClick={()=> setSingleButton(2)} className={singleButton === 2? 'item left__border right__border item__button__active' : "item left__border right__border"}>From Same Brand <span className='button__anchor'></span></button> 
                    </div> 
                </div>
            </div>    
            {singleButton === 2 ? <SameBrandViews infos={{sameBrandProducts}}/> : ''}
            {singleButton === 1 ? <SameBrandViews infos={{sameBrandProducts: similarProducts }}/> : ''}
        </div>
    );
};

export default SingleHeaderButton;