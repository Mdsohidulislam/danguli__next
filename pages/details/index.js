import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'; 
import Footer from '../../Components/Footer/Footer';
import FinalLoading from '../../Components/Loading/FinalLoading';
import Navbar from '../../Components/Navbar/Navbar'; 
import DetailsProductViews from '../../Components/SingleProductViews';
import AppContext from '../../Components/AppContext';
import { Toaster } from 'react-hot-toast';
import CartBox from '../../Components/SideBar/CartBox';

const HomeDetailsView = () => {
    const router = useRouter();
    const search = router.query.url + router.query.category;
    const [product, setProduct] = useState([]);
    const [showPage, setShowPage] = useState(false);
    let query = router.query;
    const {serverPort} = useContext(AppContext)

    useEffect(()=>{ 
        

        if(query.url){
            setShowPage(()=> false);
            getCurrentPageProductData(query.url, query.category);
        }

    },[search])

    const getCurrentPageProductData  = (url, parent__father) => { 
        axios.get(serverPort+'/api/product/getSingleProduct',{headers:{visible__url: url, parent__father}})
        .then(res => {   
            let product = res.data.product
            if(res.data.status__code === 200 && product._id){
                setProduct(product);
                document.title= product.infos.title;
                setShowPage(true);
            }else{
                router.push('/')
            }
        }).catch(err => {
            console.log(err);
        })     
    }


    return (
        <div> 
            <CartBox/>
            <Toaster/>
            {
                showPage && <Navbar/>
            }
            {
                showPage && <DetailsProductViews product={product}/>
            }
            {
                !showPage && <FinalLoading/>
            }
            {
                showPage && <Footer/>
            }
        </div>
    );
};

export default HomeDetailsView;