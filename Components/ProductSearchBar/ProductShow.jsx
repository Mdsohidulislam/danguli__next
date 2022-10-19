import React, { useEffect } from 'react';

const ProductShowForProductsHeader = ({infos}) => {

    const {currentPageAllProducts, setViewProducts,  setShowCount , viewCount, setViewCount} =  infos;
    
    useEffect(()=>{
        setViewProducts(currentPageAllProducts.slice(0, viewCount));
    },[])
    

        

    const handleInputChange = (e) => {
        if(e.target.value === 'default'){
            setViewProducts(currentPageAllProducts.slice(0, viewCount));
        }else {
            setShowCount(Number(e.target.value));
            setViewCount(Number(e.target.value));
            setViewProducts(currentPageAllProducts.slice(0, e.target.value)); // todo
        }
    }


    return (
        <div className='my__store__sort__container'> 
        <select onChange={handleInputChange}> 
            <option value='default'>View</option>
            <option value='default'>Default</option> 
            <option value={40*1}>{40*1}</option>
            <option value={40*2}>{40*2}</option>
            <option value={40*3}>{40*3}</option>
            <option value={40*4}>{40*4}</option>
            <option value={40*5}>{40*5}</option>
        </select>
    </div>
    );
};

export default ProductShowForProductsHeader;