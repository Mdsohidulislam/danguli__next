import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import LandingPageFinalSlider from './LandingPageSliderForFinal';

const LandingPageWithCartSlider = () => {
    const [buttonActiveCode, setButtonActiveCode] = useState(2)
    return (
        <div className='details__same__brand__bottom__container'>
            <div className='multi__header__button__container'>
                <div  className='button__container'>
                    <div className='left__button__container'>
                        <button onClick={()=> setButtonActiveCode(2)} className={buttonActiveCode === 2 ? "item right__border multiple__item__button__active " : "item right__border "}>Your Browsing History<span className='button__anchor'></span></button>
                        <button onClick={()=> setButtonActiveCode(3)} className={buttonActiveCode === 3 ? "item right__border multiple__item__button__active " : "item right__border "}>Inspired By Your Browsing History<span className='button__anchor'></span></button>
                        <button onClick={()=> setButtonActiveCode(1)} className={buttonActiveCode === 1 ? "item right__border multiple__item__button__active " : "item right__border "}>Recently Viewed<span className='button__anchor'></span></button>
                        <button onClick={()=> setButtonActiveCode(4)} className={buttonActiveCode === 4 ? "item right__border multiple__item__button__active " : "item right__border "}>Recommended<span className='button__anchor'></span></button>
                        <button onClick={()=> setButtonActiveCode(5)} className={buttonActiveCode === 5 ? "item right__border multiple__item__button__active " : "item right__border "}>People Also Bought<span className='button__anchor'></span></button>
                    </div>
                    <button className='item view__all left__border'><span className='font__awesome' ><FontAwesomeIcon icon={faHandPointRight}/></span> See All Products</button> 
                </div>
            </div>
            <LandingPageFinalSlider/>
        </div>
    );
};

export default LandingPageWithCartSlider;