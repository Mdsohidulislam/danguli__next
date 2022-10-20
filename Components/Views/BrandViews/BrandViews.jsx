import { useContext, useEffect, useState } from 'react';  
    
import Footer from '../../Footer/Footer'; 
import Navbar from '../../Navbar/Navbar';
import OfferPopUp from '../../OfferPopUp/OfferPopUp';
import HomeView from '../../ProductTopHeader/HomeView';    
import _ from 'lodash' 
import FinalLoading from '../../Loading/FinalLoading';   
import axios from 'axios'; 
import SingleBrandTopLinks from '../../TopLinks/BrandsTopLinks';  
import AppContext from '../../AppContext';

const SingleBrandView = ({infos}) => {
    const [filteredSpecifications, setFilteredSpecifications] = useState([]); 
    const [currentPath, setCurrentPath] = useState([]); 
    const [ viewProducts, setViewProducts ] =  useState([]); 
    const [offerProduct, setOfferProduct] = useState({})

    const [showPage, setShowPage] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    const [showCount, setShowCount] = useState(40);
    const [viewCount, setViewCount] = useState(40);
let {currentPageAllProducts, setCurrentPageAllProducts, serverPort} = useContext(AppContext);
    
    let {name} = infos;
    let search = name;
    

    useEffect(()=>{
        
        if(name){
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
        setShowCount(40);
        setViewCount(40);
        axios.get(serverPort+'/api/product/getBrand',{headers:{brand: name}}).then(res => {
            
            if(res.data.status__code === 200){       
                let {products, filterNavbar} = res.data;
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
    return ( 
            <div>
                <OfferPopUp infos={{offerProduct}}/> 
                {showPage ? 
                <div style={{overflow:"hidden"}}>  
                    <Navbar/>

                    <div className='view__all__or__category___product__container'>  
                        <div className='child__top__links__upper__cover'>
                            <SingleBrandTopLinks infos={{ name}}/> 
                        </div>
                        <HomeView infos={{currentPageAllProducts, setCurrentPageAllProducts , setViewProducts, showCount, setShowCount, viewCount, filterNavbarData:filteredSpecifications ,  setViewCount, setCurrentPageAllProducts, viewProducts, offerProduct, setOfferProduct}}/>
                    </div>
                    <Footer/>
                </div>
                :  <FinalLoading/>}
            </div> 
    );
};

export default SingleBrandView;
