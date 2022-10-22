import React from 'react'; 

const HelpFooter = () => {
    return (
        <div className='help__footer__container'>
            <div className='image__container'>
                <img alt='customer' src='/help.jpg'/>
            </div>
            <div className='info__container'>
                <p  className='p'>{`We're here to help! Click here to contact Customer Service`}</p>
                <div className='link__and__logo'>
                    <div className='help__center info__logo'>
                        <img src='/help__log.webp' alt='help__center__logo'/>
                        <p className='p'> Help centre</p>
                    </div>
                    <div className='contact__us info__logo'>
                        <img src='/contact___log.png' alt='contact__us__logo'/>
                        <p  className='p'> Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpFooter;