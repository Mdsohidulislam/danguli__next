import axios from 'axios'; 
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import FinalLoading from '../Components/Loading/FinalLoading';
import Button from '@mui/material/Button';
import { uid } from 'uid';
import Navbar from '../Components/Navbar/Navbar';
import ParentCategoryTopLinks from '../Components/TopLinks/ParentCategoryTopLinks';
import BrandTopLinks from '../Components/TopLinks/TopBrandTopLinks';
import AppContext from '../AppContext';
const HomeView = () => {
    const [brands, setBrands] = useState([]);
    const {serverPort} = useContext(AppContext);
    const handleGetAllBrand = () => {
        axios.get(serverPort+'/api/product/getAllCollection').then(res => { 
            setBrands(res.data.brandDataset);
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
            pathname:'SingleBrandView',
            query: {
                name,
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
                    brands.length && <div className='child__top__links__upper__cover'><BrandTopLinks/></div>
                }
                    {
                        brands.length ? <div className='container__all__category'>
                            {
                                brands.map((info, index) => <Button className='all__category__button' onClick={()=>handlePushSingleCategoryPages(info[0])} color='secondary' key={index} variant="outlined">{info[0]}   ({info[1].length})</Button>)
                            }
                        </div> : <FinalLoading/>
                    } 
            </div>
        </div>
    );
};

export default HomeView;