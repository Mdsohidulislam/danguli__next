import { Box } from '@mui/system';
import React from 'react'; 
import Specification from '../ProductDetails/Asisst/Specification';

const SpecificationN = ({specification}) => { 
    return (
        <Box> 
            
            <div className='details__items__container'>
                {
                        specification.map((info, index) => {
                        return <Specification info={info} key={index}/>
                    })
                }
            </div>
        </Box>
    );
};

export default SpecificationN;