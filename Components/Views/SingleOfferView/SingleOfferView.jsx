import { useContext, useEffect, useState } from 'react';  
    
import Footer from '../../Footer/Footer'; 
import Navbar from '../../Navbar/Navbar';
import OfferPopUp from '../../OfferPopUp/OfferPopUp';
import HomeView from '../../ProductTopHeader/HomeView';    
import ChildTopLinks from '../../TopLinks/ChildTopLinks'; 
import _ from 'lodash' 
import FinalLoading from '../../Loading/FinalLoading'; 
import axios from 'axios';
import AppContext from '../../AppContext';
import SingleOfferViewTopLinks from '../../TopLinks/SingleOfferViewTopLinks';
// import productsDatabase from '../../../database/products';

const SingleOfferView = ({infos}) => {
    const [filteredSpecifications, setFilteredSpecifications] = useState([]); 
    const [currentPath, setCurrentPath] = useState([]); 
    const [ viewProducts, setViewProducts ] =  useState([]);
    
    const [offerProduct, setOfferProduct] = useState({})

    const [showPage, setShowPage] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    const [showCount, setShowCount] = useState(40);
    const [viewCount, setViewCount] = useState(40);
    
    
    let {promotion__name} = infos;
    let search = promotion__name;
    let {currentPageAllProducts, setCurrentPageAllProducts, serverPort} = useContext(AppContext);
    
 
    useEffect(()=>{
        
        setCurrentPath(()=>[])
        setViewProducts(()=>[])
        setCurrentPageAllProducts(()=>[])

        setShowNavbar(()=>false)
        setShowPage(()=> false);
        handleGetCurrentPageAllProduct(); 
        setCurrentPath(()=> search); 
    },[search])
 
    const handleGetCurrentPageAllProduct = () => {
        setShowCount(()=>40);
        setViewCount(()=>40); 
        axios.get(serverPort+'/api/promotion/single__promotion__get',{headers:{promotion__name: promotion__name.replace(/__/g,'underScore')}}).then(res => { 
            if(res.data.status__code === 200){
                    let {products,  filterNavbar} = res.data;    
                    products = products.sort(()=> Math.random() - 0.5)      
                
                setFilteredSpecifications(()=> filterNavbar);   
                setCurrentPageAllProducts(()=>products);  
                setViewProducts(()=> products.slice(0, viewCount))
                setTimeout(()=>{
                    setShowPage(()=> true);
                    setShowNavbar(()=> true);
                },50) 
            }
        }).catch(err => {
            console.log(err);
        }) 
        
    }  


    
 

    return ( 
            <div>
                <OfferPopUp infos={{offerProduct}}/> 
                {showPage && showNavbar? 
                <div style={{overflow:"hidden"}}>  
                    <Navbar/>

                    <div className='view__all__or__category___product__container'>  
                        <div className='child__top__links__upper__cover'>
                            <SingleOfferViewTopLinks infos={{ promotion__name}}/> 
                        </div>
                        <HomeView infos={{currentPageAllProducts, setCurrentPageAllProducts , setViewProducts, showCount, setShowCount, viewCount, filterNavbarData:filteredSpecifications ,  setViewCount, setCurrentPageAllProducts, viewProducts, offerProduct, setOfferProduct}}/>
                    </div>
                    <Footer/>
                </div>
                :  <FinalLoading/>}
            </div> 
    );
};

export default   SingleOfferView ;
