    
import { useRouter } from 'next/router';
import { uid } from 'uid';
import TopRowHeaderTitleWithBorder from '../TopRowHeaderTitleWithBorder/TopRowHeaderTitleWithBorder';
const FeaturedCategories = () => {

   const categories =  [
    
        {
            "name": "Umart Gaming PCs", 
            "link":{
                type: 'BrandView',
                topCategory: 'Computer & Accessories',
                category: 'Gaming',
                collection: 'Gaming Desktop PC',
                brandOrType: 'Danguli PC',
                afk: uid(10),
            },
            "img__src": "/categories/gaming__pc.webp"
        },
        {
            "name": "Apple", 
            "link":{
                type:'SingleBrandView',
                name: 'Apple',
                afk: uid(10)
            },
            "img__src": "/categories/apple.webp"
        },
        {
            "name": "Laptops / Notebooks",
            "link":  {
                type: 'CategoryView',
                topCategory: 'Computer & Accessories',
                category: 'Laptop',
                afk: uid(10),
            },
            "img__src": "/categories/laptop__notebook.webp"
        }, 
        {
            "name": "Speakers",
            "link": {
                type: 'CollectionView',
                topCategory: 'Computer & Accessories',
                category: 'Sound System',
                collection: 'Speaker',
                afk: uid(10),
            },
            "img__src": "/categories/speaker.webp"
        }, 
        {
            "name": "Memory (RAM)",
            "link":  {
                type: 'BrandView',
                topCategory: 'Computer & Accessories',
                category: 'Desktop PC and Server',
                collection: 'Desktop Component',
                brandOrType: 'Desktop Ram',
                afk: uid(10)
            },
            "img__src": "/categories/memory__ram.webp"
        },
        {
            "name": "Power Supply / PSU", 
            "link":  {
                type: 'BrandView',
                topCategory: 'Computer & Accessories',
                category: 'Desktop PC and Server',
                collection: 'Desktop Component',
                brandOrType: 'Power Supply',
                afk: uid(10)
            },
            "img__src": "/categories/power__supply.webp"
        },
        {
            "name": "Monitors", 
            "link": {
                type: 'CollectionView',
                topCategory: 'Computer & Accessories',
                category: 'Monitor',
                collection: 'All Monitor',
                afk: uid(10),
            },
            "img__src": "/categories/monitor.webp"
        },
        {
            "name": "Headphones",
            "link":  {
                type: 'BrandView',
                topCategory: 'Computer & Accessories',
                category: 'Sound System',
                collection: 'Headphone',
                brandOrType: 'Headphone',
                afk: uid(10)
            }, 
            "img__src": "/categories/headphone.webp"
        },
        {
            "name": "SSD Hard Drives",
            "link":  {
                type: 'BrandView',
                topCategory: 'Computer & Accessories',
                category: 'Storage',
                collection: 'Internal SSD', 
                brandOrType: 'Internal SSD',  
                afk: uid(10)
            },  
            "img__src": "/categories/ssd.webp"
        },
        {
            "name": "Graphics Cards / GPU",
            "link":  {
                type: 'BrandView',
                topCategory: 'Computer & Accessories',
                category: 'Desktop PC and Server',
                collection: 'Desktop Component',
                brandOrType: 'Graphics Card',
                afk: uid(10)
            }, 
            "img__src": "/categories/graphics__card.webp"
        },
        {
            "name": "CPU Processors",
            "link":  {
                type: 'BrandView',
                topCategory: 'Computer & Accessories',
                category: 'Desktop PC and Server',
                collection: 'Desktop Component',
                brandOrType: 'Processor',
                afk: uid(10)
            }, 
            "img__src": "/categories/processor.webp"
        }
    ]

    const router = useRouter();

    const handleGoPage = (link) => {
        if(link.type === 'BrandView'){  
            router.push({
                pathname: link.type,
                query: { 
                    topCategory: link.topCategory,
                    category: link.category,
                    collection: link.collection,
                    brandOrType: link.brandOrType,
                    afk: link.afk
                }
            })
        }else if(link.type = 'CategoryView'){
            router.push({
                pathname: link.type,
                query: {
                    topCategory: link.topCategory,
                    category: link.category,
                    afk: link.afk
                }
            })
        }else if(link.type === 'CollectionView'){
            router.push({
                pathname: link.type,
                query: { 
                    topCategory: link.topCategory,
                    category: link.category,
                    collection: link.collection, 
                    afk: link.afk
                }
            })
        }else if(link.type === 'SingleBrandView'){
            router.push({
                pathname: link.type,
                query: { 
                    name: link.name,
                    afk: link.afk
                }
            })
        }
    }
    return (
        <div className='featured__category__container'>  
                    <TopRowHeaderTitleWithBorder infos={{ bgc: '#f0f2f5',  brc: 'none', brr: 10, title:  'Featured Categories' , display: 'block', strkbg:'#761bcc'}}/> 

            <div className='container__next__featured'> 
                    {
                        categories.map((info, index) => {
                            return         <div className='category__item' key={index}>
                            <div className='image__container'> 
                                    <img onClick={()=>handleGoPage(info.link)} src={info.img__src} alt={info.name}/> 
                            </div> 
                                <p className='title'>{info.name}</p> 
                        </div>
                        })
                    } 
                    <div className='view__all'> 
                        <p className='title'>+ VIEW ALL</p>
                    </div>
                    
            </div>
        </div>
    );
};

export default FeaturedCategories;
