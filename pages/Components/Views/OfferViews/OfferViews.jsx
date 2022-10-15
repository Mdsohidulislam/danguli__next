import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { Loading } from "../../Loading/Loading";
import OfferPopUp from "../../OfferPopUp/OfferPopUp";
import HomeView from "../../ProductTopHeader/HomeView";
import TopNavbar from "../../TopNavbar/TopNavbar";
import TopSmallNavbar from "../../TopNavbar/TopSmallNavbar";
import OfferTopLink from "../TopLinks/OfferTopLink";


const OfferViews = () => {
    const [filteredSpecifications, setFilteredSpecifications] = useState([]); 
    const [currentPath, setCurrentPath] = useState([]); 
    const [ viewProducts, setViewProducts ] =  useState([]);
    const [currentPageAllProducts, setCurrentPageAllProducts] = useState([]); 
    const [offerProduct, setOfferProduct] = useState({})

    const [showPage, setShowPage] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    const [showCount, setShowCount] = useState(40);
    const [viewCount, setViewCount] = useState(40);
    
    
            
let params = useParams(); 
let offer = params.offer;

    useEffect(()=>{
 
setCurrentPath([])
setViewProducts([])
setCurrentPageAllProducts([])

        setShowNavbar(false)
        setShowPage(false);
        handleGetCurrentPageAllProduct(); 
        setCurrentPath(params.offer);
        document.title = `All  ${offer} Products with price and specification In Danguli`;
    },[])
 
    const handleGetCurrentPageAllProduct = () => { 
        setShowCount(40);
        setViewCount(40);
        axios.get('http://localhost:3009/getSingleOffer',{headers:{offer}}).then(res => { 
            if(res.data.status__code === 200){
                let {products,  filterNavbar} = res.data;      

                setFilteredSpecifications(filterNavbar);   
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
        if(params.offer !== currentPath){ 
    setCurrentPath([])
    setViewProducts([])
    setCurrentPageAllProducts([])
    setCurrentPath(params.offer);
    document.title = `All  ${offer} Products with price and specification In Danguli`;
            setTimeout(()=>{
                setShowPage(false)
                handleGetCurrentPageAllProduct();  
            },80)
        }
    }

    handleUrlValidator(); 
        
    
    return (
            <div>
                <OfferPopUp infos={{offerProduct}}/> 
                {showPage && showNavbar? 
                <div style={{overflow:"hidden"}}>
                    <TopNavbar/>
                    <TopSmallNavbar/>

                    <div className='view__all__or__category___product__container'> 
                        <OfferTopLink infos={{offer}}/>
                        <HomeView infos={{currentPageAllProducts, setCurrentPageAllProducts , setViewProducts, showCount, setShowCount, viewCount, filterNavbarData:filteredSpecifications ,  setViewCount, setCurrentPageAllProducts, viewProducts, offerProduct, setOfferProduct}}/>
                    </div>
                    <Footer/>
                </div>
                : <Loading/>}
            </div> 
    );
};

export default OfferViews;



// todo OfferViews
// let params = useParams(); 
// useEffect(()=>{
    // axios.get('http://localhost:3009/getSingleBrand',{headers:{brand: params.offer}}).then(res => {  
    //     if(res.data.status__code === 200){
    //         let {filterNavbar, products} = res.data;
    //         setFilteredSpecifications(filterNavbar)
    //     }
    // }).catch(err => {
    //     console.log(err.message);
    // })
// },[])