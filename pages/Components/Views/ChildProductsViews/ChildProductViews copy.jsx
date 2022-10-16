import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchEngine from '../../../UTILS/SearchEngineUtils';
import { serverHelper } from '../../../UTILS/ServerUtils';
import Footer from '../../Footer/Footer';
import OfferPopUp from '../../OfferPopUp/OfferPopUp';
import HomeView from '../../ProductTopHeader/HomeView';
import TopNavbar from '../../TopNavbar/TopNavbar';
import TopSmallNavbar from '../../TopNavbar/TopSmallNavbar';
import ChildTopLinks from '../TopLinks/ChildTopLinks';

const ChildProductsViews = () => {
    const [filteredSpecifications, setFilteredSpecifications] = useState([]);
    const [brandData, setBrandData ] = useState([]);
    const [currentPath, setCurrentPath] = useState([]); 
    const [ viewProducts, setViewProducts ] =  useState([]);
    const [currentPageAllProducts, setCurrentPageAllProducts] = useState([]); 
    const [offerProduct, setOfferProduct] = useState({})

    const [showPage, setShowPage] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    const [showCount, setShowCount] = useState(40);
    const [viewCount, setViewCount] = useState(40);
    
    
    const {search} = useLocation();
    let queryData = search.split('&&');
    let father = queryData[0].split('=')[1];
    let parent = queryData[1].split('=')[1];
    let child = queryData[2].split('=')[1];
        father = father.replace(/%20/g, " ");
        parent = parent.replace(/%20/g, " ");
        child = child.replace(/%20/g, " ");
            

    useEffect(()=>{

setBrandData([])
setCurrentPath([])
setViewProducts([])
setCurrentPageAllProducts([])

        setShowNavbar(false)
        setShowPage(false);
        handleGetCurrentPageAllProduct(); 
        setCurrentPath(search);
        document.title = `${father} | ${parent} | ${child} `;
    },[])
 
    const handleGetCurrentPageAllProduct = () => {
        setShowCount(40);
        setViewCount(40);
        serverHelper.getAllCurrentPageChildDataProduct(father, parent, child)
        .then(res => {
            if(res.status__code === 200){
                let {products, specifications, filterNavbar} = res;   
                let result = SearchEngine.handleFilterProductsSpecifications(specifications, filterNavbar);  
                setFilteredSpecifications(result);   
                setCurrentPageAllProducts(products);  
                setTimeout(()=>{
                    setShowPage(true);
                    setShowNavbar(true);
                },50)
            }
        }).catch(err => {
            console.log(err);
        })
    }  

    
    
    
    const handleUrlValidator = () => {
        if(search !== currentPath){
            setBrandData([])
    setCurrentPath([])
    setViewProducts([])
    setCurrentPageAllProducts([])
            setCurrentPath(search)
            document.title = `${father} | ${parent} | ${child} `;
            setTimeout(()=>{
                setShowPage(false)
                handleGetCurrentPageAllProduct();  
            },80)
        }
    }

    handleUrlValidator(); 
        
    const getAllTypeData  = () => {
        console.log(moment().seconds());
        console.log(moment().milliseconds());
        axios.get('http://localhost:3009/getAllChildProductFilterNavbarAndDetailsAndSpecifications',{headers:{child, parent, grandfather:father}}).then(res => {
            console.log(res);
        console.log(moment().seconds());
        console.log(moment().milliseconds());


        }).catch(err => {
            console.log(err.message);
        })
    }
    
    return (
            <div>
                <OfferPopUp infos={{offerProduct}}/> 
                {showPage && showNavbar? 
                <div style={{overflow:"hidden"}}>
                    <TopNavbar/>
                    <TopSmallNavbar/>

                    <div className='view__all__or__category___product__container'> 
                        <ChildTopLinks infos={{parent, father, child}}/>
                        <HomeView infos={{currentPageAllProducts, setCurrentPageAllProducts , setViewProducts, showCount, setShowCount, viewCount, filterNavbarData:filteredSpecifications ,  setViewCount, setCurrentPageAllProducts, viewProducts, offerProduct, setOfferProduct}}/>
                    </div>
                    <Footer/>
                </div>
                : <h1>Loading......</h1>}
            </div> 
    );
};

export { ChildProductsViews };

// import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import CartElevenDemoNext from '../../../CartEleven/CartElevenNext';
// import SearchEngine from '../../../UTILS/SearchEngineUtils';
// import { serverHelper } from '../../../UTILS/ServerUtils';
// import FilterNavbar from '../../FilterNavbar/FilterNavbar';
// import ListViewForProductsHeader from '../../ProductSearchBar/ListView';
// import NextPrev from '../../ProductSearchBar/NextPrev';
// import ProductShowForProductsHeader from '../../ProductSearchBar/ProductShow';
// import SearchBarForProductsHeader from '../../ProductSearchBar/SearchBar';
// import TopNavbar from '../../TopNavbar/TopNavbar';
// import TopSmallNavbar from '../../TopNavbar/TopSmallNavbar';

// const ChildProductsViews = () => {
//     const [filteredSpecifications, setFilteredSpecifications] = useState([]);
//     const [brandData, setBrandData ] = useState([]);
//     const [currentPath, setCurrentPath] = useState([]); 
//     const [ viewProducts, setViewProducts ] =  useState([]);
//     const [currentPageAllProducts, setCurrentPageAllProducts] = useState([]);

//     const [showPage, setShowPage] = useState(false);
//     const [showNavbar, setShowNavbar] = useState(false);

//     const [showCount, setShowCount] = useState(32);
//     const [viewCount, setViewCount] = useState(32);
    
    
//     const {search} = useLocation();
//     let queryData = search.split('&&');
//     let father = queryData[0].split('=')[1];
//     let parent = queryData[1].split('=')[1];
//     let child = queryData[2].split('=')[1];
//         father = father.replace(/%20/g, " ");
//         parent = parent.replace(/%20/g, " ");
//         child = child.replace(/%20/g, " ");
            

//     useEffect(()=>{

// setBrandData([])
// setCurrentPath([])
// setViewProducts([])
// setCurrentPageAllProducts([])

//         setShowNavbar(false)
//         setShowPage(false);
//         handleGetCurrentPageAllProduct();
//         handleGetCurrentPageAllSpecificationsAndFilterNavbar(); 
//         setCurrentPath(search);
//         document.title = `${father} | ${parent} | ${child} `;
//     },[])

//     // const userGuide = {
//     //     hot__deal: true, 
//     //     free__shipping: false,  
//     //     flash__sale: true,
//     //     bundle: {
//     //         active: false, 
//     //         product__id: '',
//     //         discount: 0,
//     //         currentPrice: 0,
//     //         prevWhole:  0,
//     //         prevCurrent:  0
//     //     },
//     //     Recommended: false,
//     //     most__popular: false,
//     //     new__arrival: false,
//     //     top__review: false,
//     //     resent__sell: false,
//     //     you__link: false,
//     //     featured: false,
//     //     top__seller: false,
//     //     innovated__gadget: false,

//     // }
    
//     // console.log({str:utilsHelper.stringOperations.stringMaker(JSON.stringify(userGuide))});


//     const handleGetCurrentPageAllProduct = () => {
//         setShowCount(32);
//         setViewCount(32);
//         serverHelper.getAllCurrentPageChildDataProduct(father, parent, child)
//         .then(res => {
//             if(res.status__code === 200){
//                 let {products} = res; 
//                 let {collections, filteredBrandProductQuantity} = products; 
                
//                 setCurrentPageAllProducts(collections); 
//                 setBrandData(filteredBrandProductQuantity); 
//                 setTimeout(()=>{
//                     setShowPage(true);
//                 },50)
//             }
//         }).catch(err => {
//             console.log(err);
//         })
//     }
    
//     const handleGetCurrentPageAllSpecificationsAndFilterNavbar = () => {
//         serverHelper.getAllCurrentPageChildDataSpecificationsAndFilterNavbar(father, parent, child)
//         .then(res => {
//             if(res.status__code === 200){
//                 let {specifications, filterNavbar} = res;   
//                 let result = SearchEngine.handleFilterProductsSpecifications(specifications, filterNavbar);
//                 setFilteredSpecifications(result); 
//                 setTimeout(()=>{ 
//                     setShowNavbar(true);
//                 },50)
//             }
//         }).catch(err => {
//             console.log(err);
//         })
//     }

    
    
    
//     const handleUrlValidator = () => {
//         if(search !== currentPath){
//             setBrandData([])
//     setCurrentPath([])
//     setViewProducts([])
//     setCurrentPageAllProducts([])
//             setCurrentPath(search)
//             document.title = `${father} | ${parent} | ${child} `;
//             setTimeout(()=>{
//                 setShowPage(false)
//                 handleGetCurrentPageAllProduct(); 
//                 handleGetCurrentPageAllSpecificationsAndFilterNavbar()
//             },80)
//         }
//     }

//     handleUrlValidator(); 
        
    
//     return (
//             <div>
//                 {showPage && showNavbar? 
//                 <div style={{overflow:"hidden"}}>

//                     <TopNavbar/>
//                     <TopSmallNavbar/>

//                     <div className='view__all__or__category___product__container'> 
                    
//                     <div className='category__or__product__link__container'>
//                         <Link to='/' className='body__header__middle__Link'>Home</Link>
//                         <FontAwesomeIcon className='body__header__middle__arrow' icon={faAnglesRight}/> 
//                         <Link to={`/allProducts?father=${father}`} className='body__header__middle__Link'>{father}</Link>
//                         <FontAwesomeIcon className='body__header__middle__arrow' icon={faAnglesRight}/> 
//                         <Link to={`/parentProducts?parentFather=${father}&&parent=${parent}`} className='body__header__middle__Link'>{parent}</Link>
//                         <FontAwesomeIcon className='body__header__middle__arrow' icon={faAnglesRight}/> 
//                         <Link to={`/childProducts?parentFather=${father}&&parent=${parent}&&child=${child}`} className='body__header__middle__Link'>{child}</Link>
//                     </div>
                
//                     <div className='body__container'> 
//                         <div className='side__filter__navbar__container'> 
//                             <FilterNavbar infos={{filterNavbarData: filteredSpecifications, currentPageAllProducts,   setViewProducts }}/>
//                         </div> 
//                         <div className='products__search__and__sort__container'>
//                         <div className='products__header__navbar'>
//                             <div>
//                                 <ProductShowForProductsHeader infos={{currentPageAllProducts, setViewProducts,  setShowCount , viewCount, setViewCount}}/> {/*// todo view product items*/}
//                                 <SearchBarForProductsHeader infos={{currentPageAllProducts, setCurrentPageAllProducts, setViewProducts }}/> {/*// todo sort product items*/}
//                                 <ListViewForProductsHeader/>
//                             </div>
//                             {/* <ProductsSearchForProductsHeader infos={{currentPageAllProducts,  setViewProducts}}/> */}
//                             <ProductShowForProductsHeader infos={{currentPageAllProducts, setViewProducts,  setShowCount , viewCount, setViewCount}}/> {/*// todo view product items*/}

//                         </div>
//                         {viewProducts.length? 
//                         <div className='products__body__container'>
//                             {
//                                 viewProducts.map((info, index) =>   <CartElevenDemoNext infos={info} count={index}  key={index}/>)
//                             }
                            
//                         </div> : ""}
//                         <NextPrev infos={{currentPageAllProducts, setCurrentPageAllProducts , setViewProducts, showCount, setShowCount, viewCount, setViewCount}}/>
//                         <div style={{height:"3000px"}}></div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 : <h1>Loading......</h1>}
//             </div> 
//     );
// };

// export { ChildProductsViews }; 
