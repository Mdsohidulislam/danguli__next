 
import { useRouter } from 'next/router';
import { uid } from 'uid';
import TopRowHeaderTitleWitBorderBottom from '../TopRowHeaderTitleWithBorder/TopRowHeaderTitleWithBorderBottom';

const MoreSave = () => {
    const router = useRouter();
const handlePushSingleCategoryPages = (name) => {
    router.push({
        pathname:'SingleOfferView',
        query:{promotion__name: name, afk: uid(10)}
    })
}
    return (
        <div className='more__save__container'>
            <TopRowHeaderTitleWitBorderBottom infos={{ bgc: '#f0f2f5',  brc: 'none', brr: 10, title: 'More way to save' , display: 'block', strkbg:'#761bcc'}}/>
            <div className='help__anywhere__container'>
                <div className='item__left any__item'>
                    <img onClick={()=>handlePushSingleCategoryPages('clearance')} src='/more__save/one.webp' alt='hello world'></img>
                </div>
                <div className='item__right any__item'>
                    <img  onClick={()=>handlePushSingleCategoryPages('my__deals')}  src='/more__save/two.webp' alt='hello world'></img>
                </div> 
            </div>
        </div>
    );
};

export default MoreSave;