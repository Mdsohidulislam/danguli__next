import { faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import commaNumber from 'comma-number';
import { useRouter } from 'next/router';
import { useContext } from 'react'; 
import utilsHelper from '../../../utils/utils'
import AppContext from '../../AppContext';

const EverydayEssentialsCart = ({infos}) => {
    const {totalCarts, setTotalCarts, totalHearts, setTotalHearts, handlePrintInfos, imagePort, serverPort} = useContext(AppContext) 
    
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
        <div className='cart__nnn__hover__cover'>
                    <div className='cart__nnn__hover '>
        <div className='image__container'>
            <div className='images'>
                {newImageCollection.length ?  
                        <img src={newImageCollection[0]} alt="" onClick={()=> handleDetailsPagePush()} />  :

                        <img src='/sorry__image.jpg' alt=""  onClick={()=> handleDetailsPagePush()} /> 
                }
            </div>
        </div>
        <div  className='info__container'>
            <p className='title'  onClick={()=> handleDetailsPagePush()}  >{utilsHelper.stringOperations.stringCutter(infos.infos.title)}  </p> 
            
            <div className='offter__buttons__container'>
                <p className='discount'>save ৳  {commaNumber(infos.infos.previous__price - infos.infos.current__price)}</p>
                {/*  <button className='offer__button hot__deal'>hot deal</button> */}
                <button className='offer__button free__shipping'>free shipping</button>
                <button className='offer__button flash__sale'>flash sale!</button>
                <button className='offer__button bundle'>bundle</button>
                <button className='offer__button coupon'>coupon</button>
            </div>
            <div className='button__and__stock__container'>
                <span className='price'> ৳  {commaNumber(infos.infos.current__price)}</span>
                
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

export default EverydayEssentialsCart;