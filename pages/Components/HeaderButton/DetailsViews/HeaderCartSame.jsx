 
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import { uid } from 'uid';
import { utilsHelper } from '../../../UTILS/utils';

const HeaderCartSame = ({infos}) => {
    let serverPort = 'http://localhost:3009'
    let newImages = infos.infos.images.length ? infos.infos.images : [];
    let newImageCollection = [];
    for(let i = 0; i < newImages.length; i ++){
        if(newImages[i].indexOf('ryanscomputers') === -1){
            newImageCollection.push(serverPort+newImages[i])
        }
    } 
    let router = useRouter();
    
    const handleHistoryClick = () => { 
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
        <div className='header__cart__cover__header__cart'>
            <div className='header__cart__container'> 
                <div className='image__container'>
                {newImageCollection.length ?  
                        <img onClick={handleHistoryClick} src={newImageCollection[0]} alt="" />   :   
                        <img  onClick={handleHistoryClick}  src='/sorry__image.jpg' alt="" /> 
                }
                </div>
                <div className='info__container'> 
                    <p className='title'  onClick={handleHistoryClick} >{utilsHelper.stringOperations.stringCutter(infos.infos.title)}</p> 
                    <p className='price'> {infos.infos.current__price} tk</p>
                </div> 
            </div>
        </div>
    );
};

export default HeaderCartSame;