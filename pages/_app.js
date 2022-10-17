import { useEffect, useState } from 'react'   
import '../styles/style.globals.scss' 
import './details/details.globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Components/ProductDetails/ProductDetails.globals.scss';
import '../Components/HeaderButton/HeaderButton.globals.scss'
import '../styles/slick.scss';
import '../Components/Details/details.globals.scss';
import '../Components/TopLinks/TopLinks.globals.scss';
import '../Components/SideNavbar/SideNavbar.globals.scss'
import '../Components/Search/Search.globals.scss';
import '../Components/SearchBarContainer/SearchBarContainer.globals.scss';
import '../Components/TopNavbar/TopNavbar.globals.scss'
import axios from 'axios';
import '../Components/FilterNavbar/FilterNavbar.globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../Components/Footer/Footer.globals.scss';
import '../Components/Loading/loading.globals.scss';
import '../Components/ProductTopHeader/ProductTopHeader.globals.scss';
import '../Components/Carts/CartEight/CartEight.globals.scss';
import '../Components/Carts/RowCart/RowCart.globals.scss';
import '../Components/ProductSearchBar/ProductSearchBar.globals.scss'; 
    
import AppContext from '../Components/AppContext';
    
  
function MyApp({ Component, pageProps }) { 

    
  const [totalCarts, setTotalCarts]  = useState({cart: [], ides: [], quantity: 0, total__whole__price: 0, total__current__price: 0, total__interest__price: 0}) 
  const [totalHearts, setTotalHearts]  = useState({cart: [], ides: [], quantity: 0, total__whole__price: 0, total__current__price: 0, total__interest__price: 0}) 
  const [rowActive,  setRowActive] = useState(false);  
  const [prevCurrentPageAllProducts, setPrevCurrentPageAllProducts] = useState([]);
  const [serverPort, setServrePort]  = useState('https://danguli.herokuapp.com');
//   const [imagePort, setImagePort]  = useState('http://localhost:3009');
  const [imagePort, setImagePort]  = useState('http://danguli.tnrsoft.com')
  const [links, setLinks] = useState([]) 
  const [showWeb, setShowWeb] = useState(false) 
  const [topCategoryCollection, setTopCategoryCollection] = useState([]) 
  /// for child products views start

  /// for child products views end
    
    useEffect(()=>{


    // setCartTotalInfo(utilsHelper.calculators.totalCartAccounting()); 

    // handleGetAllData();
    // handleGetCartInfos();
    // handleGetHeartInfos();
    // let localCartItems = JSON.parse(localStorage.getItem('all__cart')) || [];

    // getAllPrevCartInfo(localCartItems);
        
    
},[]);

const handleGetCartInfos = () => { 
    let user__key = localStorage.getItem('user__key');
    axios.get('http://localhost:3009/getSingleBrowsingProduct',{headers:{user__key , database: 'add__to__cart'}}).then(res => {  
        if(res.data.status__code === 200){
            let {products} = res.data;       
            let total__products = [...products]
            let twp = 0;
                        let tcp = 0;
                        let tip = 0;
                        let ides =  [];
                        let tq = 0;
                        total__products.forEach((info, index) => { 
                            ides.push(info.product__id)

                            let intwp = info.infos.whole__price * info.infos.quantity;
                            let intcp = info.infos.current__price * info.infos.quantity;
                            let intip =  ( info.infos.current__price / 10) * info.infos.quantity; 
                                twp += intwp;
                                tcp += intcp;
                                tip += intip; 
                                tq += info.infos.quantity;
                        }) 
                        setTotalCarts({cart: total__products, quantity: tq, ides, total__whole__price: twp, total__current__price: tcp, total__interest__price: tip}); 
        }
    }).catch(err => {
        console.log(err);
    })
}
const handleGetHeartInfos = () => { 
    let user__key = localStorage.getItem('user__key');
    axios.get('http://localhost:3009/getSingleBrowsingProduct',{headers:{user__key , database: 'add__to__heart'}}).then(res => {  
        if(res.data.status__code === 200){
            let {products} = res.data;       
            let total__products = [...products]
            let twp = 0;
                        let tcp = 0;
                        let tip = 0;
                        let ides =  [];
                        let tq = 0;
                        total__products.forEach((info, index) => { 
                            ides.push(info.product__id)

                            let intwp = info.infos.whole__price * info.infos.quantity;
                            let intcp = info.infos.current__price * info.infos.quantity;
                            let intip =  ( info.infos.current__price / 10) * info.infos.quantity; 
                                twp += intwp;
                                tcp += intcp;
                                tip += intip; 
                                tq += info.infos.quantity;
                        }) 
                        setTotalHearts({cart: total__products, quantity: tq, ides, total__whole__price: twp, total__current__price: tcp, total__interest__price: tip}); 
        }
    }).catch(err => {
        console.log(err);
    })
}

// const getAllPrevCartInfo = (localCartItems) => {
//     let productIdes = [];
//     let newCart = [];
//     let newCartQuantity = []; 

//     setCartTotalInfo(utilsHelper.calculators.totalCartAccounting());

//     localCartItems.forEach((info, index) => {
//         productIdes.push(info.id);
//         newCart.push(index);
//         newCartQuantity.push(info.quantity);
//     })
 
//     serverHelper.getAllCurrentPageCartOrWishlist(productIdes)
//     .then(res => {
//         let {newProductDataForCartOrWishList}  = res;

//         newProductDataForCartOrWishList.forEach((info) => {
//             let index  = productIdes.indexOf(info.product__id);
//             let newInfo  = {...info};
//                 newInfo.infos.quantity = newCartQuantity[index]; 
            
//             newCart[index] = newInfo;
//         }) 
        
//         setCart(newCart);
//         setCartId(productIdes)
//     }).catch(err =>{
//         // console.log(err.message);
//     })
// }

// // const getAllPrevWish =  () => {

// //     let localWishItems = JSON.parse(localStorage.getItem('all__wish')) || [];
// //     let prevSaveWishlistInfo = []; 
// //     let prevSaveWishlistId = [];

// //     let totalCartItem = 0; 
    
// //     localWishItems.forEach(elem => {
// //         let result = SearchEngine.productFinder(elem.id, products); 
// //         let newInfo = {...result};
// //             newInfo.quantity = elem.quantity;
// //             prevSaveWishlistId.push(newInfo.product__id);
// //             totalCartItem +=  elem.quantity;
// //           prevSaveWishlistInfo.push(newInfo)
// //     })
  
// //     setWishlist(prevSaveWishlistInfo);
// //     setWishlistId(prevSaveWishlistId);

// //   }
// //   const getAllPrevCart = () => {

// //     let localCartItems = JSON.parse(localStorage.getItem('all__cart')) || [];
// //     let prevSaveCartId = [];
// //     let prevSaveCartInfo = []; 
// //     let totalCartItem = 0; 
     
// //   localCartItems.forEach(elem => {
// //     let result =  SearchEngine.productFinder(elem.id, products); 
// //     let newInfo = {...result};
// //         newInfo.quantity = elem.quantity;
// //         prevSaveCartId.push(newInfo.product__id);
// //         totalCartItem +=  elem.quantity;
// //       prevSaveCartInfo.push(newInfo)
// // })

// // setCart(prevSaveCartInfo);
// // setCartId(prevSaveCartId);
  
// //   }

const handleGetAllData = () => { 
    axios.get('http://localhost:3009/getAllCollectionn',{headers:{collection:'product'}})
    .then(res => { 

        let resultData = res.data.result; 
        const topCategory = [];
        const topCategoryCollection = [];
        const header = []
        const navLinks = []

        if(res.data.status__code === 200){
            
            resultData.forEach((info, itemIndex) => { 
                
                if(topCategory.indexOf(info.parent) === -1){
                    topCategory.push(info.parent)
                    topCategoryCollection.push(info)
                }

                if(header.indexOf(info.parent__father) === -1){
                    navLinks.push({
                        parentFather: info.parent__father,
                        img__src: info.infos.images[0]? info.infos.images[0] : info.infos.other__images[0],
                        link__name: info.parent__father,
                        show__index: header.length + 1,
                        all__parents : [info.parent],
                        
                        links: [
                            {
                                parent: info.parent,
                                img__src: info.infos.images[0]? info.infos.images[0] : info.infos.other__images[0],
                                link__name: info.parent,
                                show__index: 1,
                                all__child: [info.child],
                                links: [
                                    {
                                        child: info.child,
                                        img__src: info.infos.images[0]? info.infos.images[0] : info.infos.other__images[0],
                                        link__name: info.child,
                                        show__index: 1
                                    }
                                ]
                            }
                        ]
                    })

                    header.push(info.parent__father)
                } 
                else {
                    let headerIndex  = header.indexOf(info.parent__father);
                    let currentItem = navLinks[headerIndex];
                    let newItem = currentItem;
                    let {all__parents, links} = currentItem;
                    let newAllPanrets = [...all__parents];
                    let newAllParentsLink = [...links];
                    let currentNewParentIndex  =  newAllPanrets.indexOf(info.parent);
                    // console.log(newAllPanrets);
                    // console.log(newAllParentsLink);

                    if( currentNewParentIndex === -1){
                        newAllPanrets.push(info.parent)
                        newAllParentsLink.push(
                            {
                                parent: info.parent,
                                img__src: info.infos.images[0]? info.infos.images[0] : info.infos.other__images[0],
                                link__name: info.parent,
                                show__index: newAllParentsLink.length,
                                all__child: [info.child],
                                links: [
                                    {
                                        child: info.child,
                                        img__src: info.infos.images[0]? info.infos.images[0] : info.infos.other__images[0],
                                        link__name: info.child,
                                        show__index: 1
                                    }
                                ]
                            }
                        )
                        
                        newItem.all__parents = newAllPanrets;
                        newItem.links = newAllParentsLink;
                            
                        navLinks[headerIndex] = currentItem

                    }

                    else{  
                        // console.log( headerIndex, currentNewParentIndex); 
                        let orCurrentItem = navLinks[headerIndex];
                        
                        let orCurrentParentLink= orCurrentItem.links[currentNewParentIndex];
                        let {all__child, links} = orCurrentParentLink;
                        
                        let orNewAllChild = [...all__child];
                        let orNewLinks = [...links];
                        let orNewChildIndex = orNewAllChild.indexOf(info.child);
                        

                        if(orNewChildIndex === -1){
                            orNewAllChild.push(info.child);
                            orNewLinks.push(  {
                                    child: info.child,
                                    img__src: info.infos.images[0]? info.infos.images[0] : info.infos.other__images[0],
                                    link__name: info.child,
                                    show__index: orNewAllChild.length
                                }  )
                        }

                        let setOrCurrentParentLink = {...orCurrentParentLink};

                        setOrCurrentParentLink.links = orNewLinks;
                        setOrCurrentParentLink.all__child = orNewAllChild;

                        navLinks[headerIndex].links[currentNewParentIndex] = setOrCurrentParentLink
                    } 
                }
            })
        }    
        if(navLinks.length){
          setLinks(navLinks);
          setShowWeb(true); 
          setTopCategoryCollection(topCategoryCollection);
        }
        
    }).catch(err => {
        console.log(err);
    })
} 
    
    const handlePrintInfos = (infos) => {
      console.log(infos);
    }

    const [currentPageAllProducts, setCurrentPageAllProducts] = useState([]); 
  
  return    <AppContext.Provider value={{prevCurrentPageAllProducts, imagePort, setImagePort, setPrevCurrentPageAllProducts, currentPageAllProducts, setCurrentPageAllProducts,  handleGetCartInfos, links, setLinks, showWeb, setShowWeb, topCategoryCollection, setTopCategoryCollection, totalCarts, setTotalCarts, rowActive,  setRowActive, serverPort, setServrePort ,totalHearts, setTotalHearts, handlePrintInfos}}>
    
                        <Component {...pageProps} /> 
    
                
              </AppContext.Provider> 
}

export default MyApp
