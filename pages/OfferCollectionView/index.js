import axios from 'axios'; 
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import FinalLoading from '../../Components/Loading/FinalLoading';
import Button from '@mui/material/Button';
import { uid } from 'uid';
import Navbar from '../../Components/Navbar/Navbar'; 
import BrandTopLinks from '../../Components/TopLinks/TopBrandTopLinks';
import AppContext from '../../Components/AppContext';
import utilsHelper from '../../utils/utils';
import SearchEngine from '../../utils/SearchEngineUtils';
import OfferCollectionViewTopLinks from '../../Components/TopLinks/OfferCollectionViewTopLinks';
const HomeView = () => {
    const [brands, setBrands] = useState([]);
    const {serverPort} = useContext(AppContext);
    const handleGetAllBrand = () => {
        axios.get(serverPort+'/api/promotion/getAllOfferCollection').then(res => {  
            if(res.data.promotion.length){
                // setBrands(res.data.promotion)
                setBrands(res.data.promotion)
            }
        }).catch(err => {
            console.log(err.message);
        })
    }
    useEffect(()=>{
        handleGetAllBrand();
    },[])

    const router = useRouter();
    const handlePushSingleCategoryPages= (name) => {
        router.push({
            pathname:'SingleOfferView',
            query: {
                promotion__name: name,
                afk: uid()
            }
        })
    } 
    return (
        <div> 
            {
                brands.length && <Navbar/>
            }
            <div className='all__category__view__next__container__next__prev'>  
                {
                    brands.length && <div className='child__top__links__upper__cover'><OfferCollectionViewTopLinks/></div>
                }
                    {
                        brands.length ? <div className='container__all__category'>
                            {
                                brands.map((info, index) => <Button className='all__category__button' onClick={()=>handlePushSingleCategoryPages(info.promotion__name)} color='secondary' key={index} variant="outlined">{info.promotion__name.replace(/__/g,' ')}   ({info.product__ides.length})</Button>)
                            }
                        </div> : <FinalLoading/>
                    } 
            </div>
        </div>
    );
};

export default HomeView;