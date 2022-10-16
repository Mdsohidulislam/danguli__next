import { useContext, useEffect, useState } from 'react';  
    
import Footer from '../../Footer/Footer';
import { Loading } from '../../Loading/Loading';
import Navbar from '../../Navbar/Navbar';
import OfferPopUp from '../../OfferPopUp/OfferPopUp';
import HomeView from '../../ProductTopHeader/HomeView';   
import SideNavbar from '../../SideNavbar/SideNavbar';
import ChildTopLinks from '../../TopLinks/ChildTopLinks'; 
import _ from 'lodash'
import { serverHelper } from '../../../UTILS/ServerUtils';
import productsDatabase from '../../../database/products';
import FinalLoading from '../../Loading/FinalLoading';
import AppContext from '../../../AppContext';
import axios from 'axios';
// import productsDatabase from '../../../database/products';

const ChildProductsViews = ({infos}) => {
    const [filteredSpecifications, setFilteredSpecifications] = useState([]); 
    const [currentPath, setCurrentPath] = useState([]); 
    const [ viewProducts, setViewProducts ] =  useState([]);
    
    const [offerProduct, setOfferProduct] = useState({})

    const [showPage, setShowPage] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    const [showCount, setShowCount] = useState(40);
    const [viewCount, setViewCount] = useState(40);
    
    
    let {father, parent, child, topCategory} = infos;
    let search = father+parent+child + topCategory;
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
        axios.get(serverPort+'/api/product/getChildProduct',{headers:{top__father: topCategory, parent__father: father, parent, child}}).then(res => { 
            if(res.data.status__code === 200){
                let {products,  filterNavbar} = res.data;       
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
                            <ChildTopLinks infos={{ topCategory, parent, parent__father: father, child}}/> 
                        </div>
                        <HomeView infos={{currentPageAllProducts, setCurrentPageAllProducts , setViewProducts, showCount, setShowCount, viewCount, filterNavbarData:filteredSpecifications ,  setViewCount, setCurrentPageAllProducts, viewProducts, offerProduct, setOfferProduct}}/>
                    </div>
                    <Footer/>
                </div>
                :  <FinalLoading/>}
            </div> 
    );
};

export { ChildProductsViews };
