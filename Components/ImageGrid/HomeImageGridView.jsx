import React from 'react';

const HomeImageGridView = () => {
    return (
        <div className='home__view__image__view__container'> 
                <div className='container__home__next'>
                <div className='grid__item'><img src='/image__grid/image___grid-_4_.jpg' alt='hello world'/></div>
                    <div className='grid__item'><img src='/image__grid/image___grid-_3_.jpg' alt='hello world'/></div>
                    <div className='grid__item'><img src='/image__grid/image___grid-_2_.jpg' alt='hello world'/></div>
                    <div className='grid__item'><img src='/image__grid/image___grid-_1_.jpg' alt='hello world'/></div>
                </div>
        </div>
    );
};

export default HomeImageGridView;