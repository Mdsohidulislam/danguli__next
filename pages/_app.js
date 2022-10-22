import { useEffect, useState } from 'react'   
import toast,{Toaster} from 'react-hot-toast';
import '../styles/style.globals.scss' 
import './details/details.globals.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "react-progress-button/react-progress-button.css"
import "slick-carousel/slick/slick-theme.css";
import '../Components/ProductDetails/ProductDetails.globals.scss';
import '../Components/HeaderButton/HeaderButton.globals.scss'
import '../styles/slick.scss';
import '../Components/Details/details.globals.scss';
import '../Components/TopLinks/TopLinks.globals.scss';
import '../Components/SideNavbar/SideNavbar.globals.scss'
import '../Components/Search/Search.globals.scss';
import '../Components/Home/Carousel/Carousel.globals.scss'
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
import '../Components/Home/TopRowHeaderTitleWithBorder/TopRowHeaderTitleWithBorder.globals.scss'
import '../Components/ProductSearchBar/ProductSearchBar.globals.scss'; 
import '../Components/Home/CartNn/CartNn.globals.scss';
import '../Components/Home/FeaturedCategories/FeaturedCategory.globals.scss'
import '../Components/Home/CartNn/LandingCartOne.globals.scss';
import '../Components/FooterBanner/FooterBanner.globals.scss'; 
import '../Components/Carts/CartEleven/CartEleven.globals.scss'
import '../Components/ImageGrid/HomeImageGridView.globals.scss';
import '../Components/PrintHomeBanner/PrintHomeBanner.globals.scss';
import '../Components/HelpAnywhere/HelpAnyWhere.globals.scss'
import '../Components/TechSuccess/TechSuccess.globals.scss';
import '../Components/CartPage/CartPage.globals.scss';
import '../Components/SideBar/ProductItem.globals.scss';
import '../Components/SideBar/SideBar.globals.scss';
import '../Components/CartPage/CartCheckOutForm.globals.scss';
import AppContext from '../Components/AppContext'; 
import '../Components/Home/MoreSave/MoreSave.globals.scss';
import '../Components/OwenerFeatures/OwenerFeatures.globals.scss';
import '../Components/BrandsCategories/BrandsCategories.globals.scss'
import { uid } from 'uid';
import moment from 'moment';

function MyApp({ Component, pageProps }) { 


    const [totalCarts, setTotalCarts]  = useState({cart: [], ides: [], quantity: 0, total__whole__price: 0, total__current__price: 0, total__interest__price: 0}) 
    const [totalHearts, setTotalHearts]  = useState({cart: [], ides: [], quantity: 0, total__whole__price: 0, total__current__price: 0, total__interest__price: 0}) 
    const [currentPageAllProducts, setCurrentPageAllProducts] = useState([]); 
    const [rowActive,  setRowActive] = useState(false);  
    const [prevCurrentPageAllProducts, setPrevCurrentPageAllProducts] = useState([]);
    const [cLoading, setCLoading] = useState(false); 
    const [serverPort, setServrePort]  = useState('http://localhost:7000');
    const [imagePort, setImagePort]  = useState('http://localhost:3009');
    //  const [serverPort, setServrePort]  = useState('https://danguli.herokuapp.com');
    // const [imagePort, setImagePort]  = useState('http://danguli.tnrsoft.com')
    //const [imagePort, setImagePort]  = useState('http://danguli.tnrsoft.com')
    useEffect(()=>{
        let userKey = localStorage.getItem('user__key');
        if(!userKey){
            localStorage.setItem('user__key', uid(15));
        }
        
        handleGetCartInfos();
        handleGetHeartInfos();
    },[])
    
        

    const handleGetCartInfos = () => { 
        let userKey = localStorage.getItem('user__key');

        axios.post(serverPort+'/api/cart/getUserCartInfo',{userKey}).then(res => {
            let data = res.data.data;
            if(res.data.status__code === 200){ 
                let {products, ides, total__cart__info} = data;
                setTotalCarts({cart: products, ides, quantity: total__cart__info.total__quantity, total__whole__price: total__cart__info.total__whole__price, total__current__price: total__cart__info.total__current__price, total__interest__price: total__cart__info.total__interest__price, total__previous__price: total__cart__info.total__previous__price})
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const handleGetHeartInfos = () => { 
        let userKey = localStorage.getItem('user__key');

        axios.post(serverPort+'/api/heart/getUserHeartInfo',{userKey}).then(res => {
            let data = res.data.data;
            if(res.data.status__code === 200){ 
                let {products, ides, total__cart__info} = data;
                setTotalHearts({cart: products, ides, quantity: total__cart__info.total__quantity, total__whole__price: total__cart__info.total__whole__price, total__current__price: total__cart__info.total__current__price, total__interest__price: total__cart__info.total__interest__price, total__previous__price: total__cart__info.total__previous__price})
            }
        }).catch(err => {
            console.log(err);
        })
    }
    
    const handleAddToCart = ( productId, child) => {   
        let userKey = localStorage.getItem('user__key');

        axios.post(serverPort+'/api/cart/addToCart',{userKey, productId, child})
        .then(res => { 
            let data = res.data.data;
            if(res.data.status__code === 200){ 
                let {products, ides, total__cart__info} = data;
                setTotalCarts({cart: products, ides, quantity: total__cart__info.total__quantity, total__whole__price: total__cart__info.total__whole__price, total__current__price: total__cart__info.total__current__price, total__interest__price: total__cart__info.total__interest__price, total__previous__price: total__cart__info.total__previous__price})
                toast.success('Successfully added to cart',{position:'top-right'})
            }
        }).catch(err => { 
            console.log(err);
        })
    }

    const handleAddToHeart = (productId, child) => { 
        let userKey = localStorage.getItem('user__key');

        axios.post(serverPort+'/api/heart/addToHeart',{userKey, productId, child})
        .then(res => { 
            let data = res.data.data;
            if(res.data.status__code === 200){ 
                let {products, ides, total__cart__info} = data;
                setTotalHearts({cart: products, ides, quantity: total__cart__info.total__quantity, total__whole__price: total__cart__info.total__whole__price, total__current__price: total__cart__info.total__current__price, total__interest__price: total__cart__info.total__interest__price, total__previous__price: total__cart__info.total__previous__price})
                toast.success('Successfully added to wishlist',{position:'top-right'})
            }
        }).catch(err => {
            console.log(err.message);
        })
    }
    const handleRemoveFromCart = ( productId) => { 
        let userKey = localStorage.getItem('user__key');

        axios.post(serverPort+'/api/cart/removeFromCart',{userKey, productId}).then(res => {
            let data = res.data.data;
            if(res.data.status__code === 200){ 
                let {products, ides, total__cart__info} = data;
                setTotalCarts({cart: products, ides, quantity: total__cart__info.total__quantity, total__whole__price: total__cart__info.total__whole__price, total__current__price: total__cart__info.total__current__price, total__interest__price: total__cart__info.total__interest__price, total__previous__price: total__cart__info.total__previous__price})
            }
            toast.error('Successfully removed from cart',{position: 'top-right'})
        }).catch(err => {
            console.log(err);
        })
    }
    const handleRemoveFromHeart = (productId) => { 
        let userKey = localStorage.getItem('user__key');

        axios.post(serverPort+'/api/heart/removeFromHeart',{userKey, productId}).then(res => {
            let data = res.data.data;
            if(res.data.status__code === 200){ 

                let {products, ides, total__cart__info} = data;
                setTotalHearts({cart: products, ides, quantity: total__cart__info.total__quantity, total__whole__price: total__cart__info.total__whole__price, total__current__price: total__cart__info.total__current__price, total__interest__price: total__cart__info.total__interest__price, total__previous__price: total__cart__info.total__previous__price})
                toast.error('Successfully removed from wishlist', {position:'top-right'})
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const handleCartProductQuantityIncrease = (productId) => {
        let userKey = localStorage.getItem('user__key');

        axios.post(serverPort+'/api/cart/cartProductQuantityIncrease',{userKey, productId}).then(res => {
            let data = res.data.data;
            if(res.data.status__code === 200){ 

                let {products, ides, total__cart__info} = data;
                setTotalCarts({cart: products, ides, quantity: total__cart__info.total__quantity, total__whole__price: total__cart__info.total__whole__price, total__current__price: total__cart__info.total__current__price, total__interest__price: total__cart__info.total__interest__price, total__previous__price: total__cart__info.total__previous__price})
                toast.success('Quantity Increased', {position:'top-right'})
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const handleCartProductQuantityDecrease = (productId, quantity) => {
        console.log(productId, quantity);
        if(1 < quantity){
            let userKey = localStorage.getItem('user__key');

            axios.post(serverPort+'/api/cart/cartProductQuantityDecrease',{userKey, productId}).then(res => {
                let data = res.data.data;
                if(res.data.status__code === 200){ 
                    let {products, ides, total__cart__info} = data;
                    setTotalCarts({cart: products, ides, quantity: total__cart__info.total__quantity, total__whole__price: total__cart__info.total__whole__price, total__current__price: total__cart__info.total__current__price, total__interest__price: total__cart__info.total__interest__price, total__previous__price: total__cart__info.total__previous__price})
                    toast.success('Quantity Decreased', {position:'top-right'})
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }

    const handlePrintInfos = (infos) => {
        console.log(infos);
    }

        return    <AppContext.Provider value={{ handleCartProductQuantityDecrease, handleCartProductQuantityIncrease, cLoading, prevCurrentPageAllProducts, imagePort, setImagePort, setPrevCurrentPageAllProducts, currentPageAllProducts, setCurrentPageAllProducts,  totalCarts, setTotalCarts, rowActive,  setRowActive, serverPort, setServrePort ,totalHearts, setTotalHearts, handlePrintInfos, handleAddToCart, handleAddToHeart, handleRemoveFromCart, handleRemoveFromHeart}}>
                    
                        <Component {...pageProps}></Component> 
                    
    
                
            </AppContext.Provider> 
}

export default MyApp
