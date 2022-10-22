import axios from 'axios';
import React, { useState } from 'react'; 
import utilsHelper from '../../utils/utils';
    
const FooterBanner = () => {

    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        const postInfo = {};
        postInfo.post__time =utilsHelper.timeManagements.momentTimeMaker();
        postInfo.email = email;

        axios.post('http://localhost:3009/subscriber', postInfo)
        .then(res => {
            if(res.data.status__code === 200){
                document.getElementById('subscriber').value=''
            }
        })
    }

    return (
        <div>
            <div className='footer__banner__container'>
                <div className='container__next__footer__banner'>
                    <div className='info__container'>
                        <small className='top__small__title'>500+ BRAND AND GROWING</small>
                        <h1>Get Discounts, The Hottest Deals & More!</h1>
                        <small className='bottom__small__title'>Subscribe for exclusive deals and the latest news from Danguli.</small>
                        <form onSubmit={handleSubmit}>
                            <input type='email' placeholder='Enter your email address' onChange={(e)=> setEmail(e.target.value)} name='email' required id='subscriber'></input>
                            <button type='submit'>SUBSCRIBE</button>
                        </form>
                    </div>
                    <div className='image__container'>
                        <img src='/footer.png' alt='store accessories'/>
                    </div>
                </div>

            </div> 
        </div>
    );
};

export default FooterBanner;