import { useContext, useEffect, useState } from 'react';  
    
import Footer from '../../Footer/Footer'; 
import Navbar from '../../Navbar/Navbar';
import OfferPopUp from '../../OfferPopUp/OfferPopUp';
import HomeView from '../../ProductTopHeader/HomeView';    
import _ from 'lodash'
import { serverHelper } from '../../../UTILS/ServerUtils'; 
import FinalLoading from '../../Loading/FinalLoading'; 
import FatherTopLinks from '../../TopLinks/FatherTopLinks';
import AppContext from '../../../AppContext';
import axios from 'axios';
import SingleCategoryTopLinks from '../../TopLinks/CategoryTopLinks';
import TopCategoryTopLinks from '../../TopLinks/TopCategoryTopLinks';
// import productsDatabase from '../../../database/products';

const TopCategoryView = ({infos}) => {
    const [filteredSpecifications, setFilteredSpecifications] = useState([]); 
    const [currentPath, setCurrentPath] = useState([]); 
    const [ viewProducts, setViewProducts ] =  useState([]); 
    const [offerProduct, setOfferProduct] = useState({})

    const [showPage, setShowPage] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    const [showCount, setShowCount] = useState(40);
    const [viewCount, setViewCount] = useState(40);
let {currentPageAllProducts, setCurrentPageAllProducts, serverPort} = useContext(AppContext);
    
    let {topCategory} = infos;
    let search = topCategory;

    useEffect(()=>{
        
        if(topCategory){
            setCurrentPath(()=>[])
            setViewProducts(()=>[])
            setCurrentPageAllProducts(()=>[])
    
            setShowNavbar(()=>false)
            setShowPage(()=> false);
            setCurrentPath(()=> search); 
            handleGetCurrentPageAllProduct(); 
        }
    },[search])
 
    const handleGetCurrentPageAllProduct = () => {

        setShowCount(()=>40);
        setViewCount(()=>40); 

        axios.get(serverPort+'/api/product/getTopFatherProduct',{headers:{top__father: topCategory}}).then(res => { 
            if(res.data.status__code === 200){
                let {products,  filterNavbar} = res.data;       
                setFilteredSpecifications(()=> filterNavbar.slice(0,12));   
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
                {showPage ? 
                <div style={{overflow:"hidden"}}>  
                    <Navbar/>

                    <div className='view__all__or__category___product__container'>  
                        <div className='child__top__links__upper__cover'>
                            <TopCategoryTopLinks infos={{ topCategory}}/> 
                        </div>
                        <HomeView infos={{currentPageAllProducts, setCurrentPageAllProducts , setViewProducts, showCount, setShowCount, viewCount, filterNavbarData:filteredSpecifications ,  setViewCount, setCurrentPageAllProducts, viewProducts, offerProduct, setOfferProduct}}/>
                    </div>
                    <Footer/>
                </div>
                :  <FinalLoading/>}
            </div> 
    );
};

export { TopCategoryView };
