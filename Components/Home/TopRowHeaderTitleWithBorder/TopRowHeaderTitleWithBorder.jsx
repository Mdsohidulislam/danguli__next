import React from 'react';

const TopRowHeaderTitleWithBorder = ({infos}) => {
    // let infos = { bgc: '#f0f2f5',  brc: '#761bcc', brr: 10 }
    return (
        <div className='TopRowHeaderTitleWithBorder__container'>
        {/* <div className='TopRowHeaderTitleWithBorder__container' style={{backgroundColor: infos.bgc}}> */}
            <div className='border__stroke' style={{backgroundColor: infos.brc}}></div>
            <div className='info__container' style={{backgroundColor: infos.bgc, border: `3px solid ${infos.brc}`, borderRadius: `${infos.brr}px`}}>
                <h2>{infos.title}</h2>
                <div className='bottom__stroke' style={{display: infos.display, backgroundColor: infos.strkbg}}></div>
            </div>
        </div>
    );
};

export default TopRowHeaderTitleWithBorder;