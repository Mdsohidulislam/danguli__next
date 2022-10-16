import React from 'react'; 
import DetailsTabs from '../Components/Details/DetailsTabs'; 
import { Box } from '@mui/material';
import ReferSlider from '../Components/Details/RefferSlider';
import ImageAndInfoContainer from '../Components/Details/ImageAndInfoContainer';
import productsDatabase from '../database/products'; 

const DetailsProductViews = ({product}) => { 
    
    let specification = product.infos.specifications;
    let details = product.infos.details;
    const review = [1,3,3,2,2,2,2,22,2,2,2,2,2,]
    const QAA = [1,3,3,2,2,2,2,22,2,2,2,2,2,]

    
    return (
        <Box className='details__home__container'> 
            <ImageAndInfoContainer infos={{product}}/>
            <ReferSlider/>
            <DetailsTabs infos={{specification, details, review, QAA}}/>
            <div style={{height:'20px'}}/>
            <ReferSlider/> 
        </Box>
    );
};

export default DetailsProductViews;