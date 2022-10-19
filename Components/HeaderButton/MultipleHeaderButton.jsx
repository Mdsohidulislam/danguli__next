import { useState } from 'react';
import SameBrandViews from './DetailsViews/SameBrandViews';

const MultiHeaderButton = ({infos}) => {
    let {peopleAlsoBought, browsingHistory} = infos;
    const [buttonActiveCode, setButtonActiveCode] = useState(2)
    return (
        <div className='details__same__brand__bottom__container'>
            <div className='multi__header__button__container'>
                <div  className='button__container'>
                    <div className='left__button__container'>
                        <button onClick={()=> setButtonActiveCode(2)} className={buttonActiveCode === 2 ? "item right__border multiple__item__button__active " : "item right__border "}>Your Browsing History<span className='button__anchor'></span></button> 
                        <button onClick={()=> setButtonActiveCode(5)} className={buttonActiveCode === 5 ? "item right__border multiple__item__button__active " : "item right__border "}>People Also Bought<span className='button__anchor'></span></button>
                    </div> 
                </div>
            </div> 
            {buttonActiveCode === 2 ? <SameBrandViews infos={{sameBrandProducts: browsingHistory}}/> : ''} 
            {buttonActiveCode === 5 ? <SameBrandViews infos={{sameBrandProducts: peopleAlsoBought}}/> : ''} 
        </div>
    );
};

export default MultiHeaderButton;