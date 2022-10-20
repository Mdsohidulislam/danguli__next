import { useRouter } from 'next/router';
import { uid } from 'uid';
import TopRowHeaderTitleWitBorderBottom from '../Home/TopRowHeaderTitleWithBorder/TopRowHeaderTitleWithBorderBottom'; 

const TechSuccess = () => {
    const techSuccessDatabase = [
        {src: '/tech__success/one.webp',link:{type:'CollectionView', topCategory:'Computer & Accessories', category: 'Monitor', collection: 'All Monitor'}},
        {src: '/tech__success/two.jpg',link:{type:'CollectionView', topCategory:'Computer & Accessories', category: 'Laptop', collection: 'All Laptop'}},
        {src: '/tech__success/two.jpg',link:{type:'CollectionView', topCategory:'Computer & Accessories', category: 'Desktop PC and Server', collection: 'Desktop Component'}}
    ]
    const router = useRouter();
    const handlePushSingleCategoryPages = (name) => {
        router.push({
            pathname:name.type,
            query:{topCategory: name.topCategory, category: name.category, collection: name.collection, afk: uid(10)}
        })
    }
    return (
        <div className='tech__success__container'>
            <TopRowHeaderTitleWitBorderBottom infos={{ bgc: '#f0f2f5',  brc: 'none', brr: 10, title: 'Tech for Success' , display: 'block', strkbg:'#761bcc'}}/>
            <div className='help__anywhere__container'>
                {
                    techSuccessDatabase.map((info, index) => {
                        return <div className='item__left any__item' key={index}>
                                <img  onClick={()=>handlePushSingleCategoryPages(info.link)}  src={info.src} alt={info.src}></img>
                            </div>
                    })
                } 
            </div>
        </div>
    );
};

export default TechSuccess;