import { faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { images } from '../../../Images';

const LandingPageCartOne = ({infos, count}) => {
    // let serverPort = 'http://localhost:3009'
    // let newImages = infos.infos.images.length ? infos.infos.images : [];
    // let newImageCollection = [];
    // for(let i = 0; i < newImages.length; i ++){
    //     if(newImages[i].indexOf('ryanscomputers') === -1){
    //         newImageCollection.push(serverPort+newImages[i])
    //     }
    // }  
    return (
        <div className='cart__nnn__hover__cover'>
                    <div className='cart__nnn__hover '>
        <div className='image__container'>
            <div className='images'>
                <img src={"/CartImages/"+images[Math.ceil(Math.random()*11)]}alt='product'/> 
            </div>
        </div>
        <div  className='info__container'>
            <p className='title'>TP-Link L920-5 Multi-Colour Smart Wi-Fi Light Strip 5m and</p>
            
            <div className='offter__buttons__container'>
                <p className='discount'>save ৳ 20.00</p>
                {/*  <button className='offer__button hot__deal'>hot deal</button> */}
                <button className='offer__button free__shipping'>free shipping</button>
                <button className='offer__button flash__sale'>flash sale!</button>
                <button className='offer__button bundle'>bundle</button>
                <button className='offer__button coupon'>coupon</button>
            </div>
            <div className='button__and__stock__container'>
                <span className='price'> ৳ 300.00</span>
                
                <span className='stock in'>In Stock</span>
                {/* <span className='stock out'>Out Of Stock</span>  */}
            </div>
            <div className='action__button__container'>
                <button> <FontAwesomeIcon icon={faShoppingCart}/> </button>
                <button> <FontAwesomeIcon icon={faHeart}/> </button>
                <button> <FontAwesomeIcon icon={faSearch}/> </button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default LandingPageCartOne;