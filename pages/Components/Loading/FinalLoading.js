import React from 'react';
import ReactSpinners,{HashLoader} from 'react-spinners';
const FinalLoading = () => {
    return (
        <div className='final__loading__next__container'>
            <HashLoader size={200} color='green'/>
        </div>
    );
};

export default FinalLoading;