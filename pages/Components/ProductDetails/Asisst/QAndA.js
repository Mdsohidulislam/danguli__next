

import React from 'react';
import ActionForm from './ActionForm';

const QAndA = ({info}) => {
    // let data  = JSON.parse(info.info);
    
    return (
        <div className='question__and__ans__item'> 
            <p className='question'><span className=''>Q: </span> How  I can get My Product Id ? <small>(11/11/1111)</small></p> 
            <p className='ans'><span>Ans: </span>At First click product image and you will redirect product details there you find your product id</p>
            {/* <ActionForm/> */}
        </div>
    );
};

export default QAndA;