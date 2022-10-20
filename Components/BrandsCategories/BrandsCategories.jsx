
import { useRouter } from 'next/router';
import { uid } from 'uid';
import TopRowHeaderTitleWitBorderBottom from '../Home/TopRowHeaderTitleWithBorder/TopRowHeaderTitleWithBorderBottom'; 

const BrandsCategories = () => {

    const categories =   [
        {
            "name": "Apple",
            "img__src": "/brand/apple.webp",
            "url": "/allBrands/Apple"
        },
        {
            "name": "Intel",
            "img__src": "/brand/intel.webp",
            "url": "/allBrands/Intel"
        },
        {
            "name": "AMD",
            "img__src": "/brand/amd.webp",
            "url": "/allBrands/AMD"
        },
        {
            "name": "Corsair",
            "img__src": "/brand/corsair.webp",
            "url": "/allBrands/Corsair"
        },
        {
            "name": "Gigabyte",
            "img__src": "/brand/gigabyte.webp",
            "url": "/allBrands/Gigabyte"
        },
        {
            "name": "HP",
            "img__src": "/brand/hp.webp",
            "url": "/allBrands/HP"
        },
        {
            "name": "MSI",
            "img__src": "/brand/msi.webp",
            "url": "/allBrands/MSI"
        },
        {
            "name": "Samsung",
            "img__src": "/brand/samsung.webp",
            "url": "/allBrands/Samsung"
        },
        {
            "name": "Microsoft",
            "img__src": "/brand/microsoft.webp",
            "url": "/allBrands/Microsoft"
        },
        {
            "name": "Thermaltake",
            "img__src": "/brand/thermaltake.webp",
            "url": "/allBrands/Thermaltake"
        },
        {
            "name": "LG",
            "img__src": "/brand/lg.webp",
            "url": "/allBrands/LG"
        }
    ]
    const router = useRouter();
    const handleGoCurrentPage = (name) => {
        router.push({
            pathname:'SingleBrandView',
            query: {name, afk: uid(10)}
        })
    }

    // LG Thermaltake Microsoft Samsung MSI HP Gigabyte Corsair AMD Intel Apple
    return (
        <div className='brand__category__container'> 
                    <TopRowHeaderTitleWitBorderBottom infos={{ bgc: '#f0f2f5',  brc: 'none', brr: 10, title:  'Save big on top brands' , display: 'block', strkbg:'#761bcc'}}/> 
            <div className='container__next__home'> 
                    {
                        categories.map((info, index) => {
                            return         <div className='category__item' key={index}>
                            <div className='image__container'> 
                                <div onClick={()=> handleGoCurrentPage(info.name)}>
                                <img src={info.img__src} alt={info.name} title={info.name}/> </div>
                            </div> 
                        </div>
                        })
                    } 
                    <div className='view__all'> 
                        <p onClick={()=> handleGoCurrentPage()} className='title'>+ VIEW ALL</p>
                    </div>
                    
            </div>
        </div>
    );
};

export default BrandsCategories;