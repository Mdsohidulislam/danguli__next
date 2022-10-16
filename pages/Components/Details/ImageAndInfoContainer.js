
import { Button, CircularProgress, ListItemButton, ListItemText } from '@mui/material';
import React, { useContext, useState } from 'react';
import { NavItem } from 'react-bootstrap';
import { SideBySideMagnifier } from 'react-image-magnifiers';
import AppContext from '../../AppContext';
import active__utils from '../../UTILS/Active__utils';
import DetailsBuyButtonGroup from '../HeaderButton/DetailsBuyButtonGroup';
import ChildTopLinks from '../TopLinks/ChildTopLinks';
    
import ImageStepper from './ImageStepper';

const ImageAndInfoContainer = ({infos}) => {
    let {product} = infos;
    const {imagePort} = useContext(AppContext)
    let {top__father ,parent__father, parent, child} = product;
    let images = active__utils.image___selector(product, imagePort)
    
    const [imgSrc, setImgSrc] = useState(images[0]); 
    return (
        <div>
            <div className='child__top__links__upper__cover'>
                <ChildTopLinks infos={{topCategory: top__father, parent__father, parent, child}}/> 
            </div>

            <div className='details__image__info__container'>
                <div className='image__container'> 
                    <SideBySideMagnifier className='max____width'  imageSrc={imgSrc} alwaysInPlace={true} fillAvailableSpace={true}/>
                    <ImageStepper infos={{imgSrc, setImgSrc, images}} className='image__stepper'/>
                </div>
                <div className='info__container'>  
                    <div className='title' style={{marginBottom:'30px'}}>
                        <h2>{product.infos.title}</h2>
                    </div>  
                    <div>
                        <p className='quick__overview__child__item current__price'>  Current Price : {product.infos.current__price} tk </p>
                        <p className='quick__overview__child__item previous__price '>  Previous Price : {product.infos.previous__price} tk </p>
                        <p className='quick__overview__child__item savings__price'>  Save : {product.infos.previous__price - product.infos.current__price} tk </p>
                    </div>
                    <div className='overview__container'>
                        <h3 style={{margin:'16px 0'}}>Quick Overview</h3>
                        {
                            product.infos.overviews.slice(0,6).map((info, index) => {
                                return <p className='quick__overview__child__item' key={index}>{info}</p>
                            })
                        }
                    </div>
                    <div style={{height:'100px'}}></div>
                    <DetailsBuyButtonGroup/>                                                                            
                </div>
            </div>
        </div>
    );
};

export default ImageAndInfoContainer;