import TopRowHeaderTitleWithBorder from "../Home/TopRowHeaderTitleWithBorder/TopRowHeaderTitleWithBorder";
import TopRowHeaderTitleWitBorderBottom from "../Home/TopRowHeaderTitleWithBorder/TopRowHeaderTitleWithBorderBottom";

 

const PrintHomeBanner = () => {
    return (
        <div className='PrintHomeBanner__container'> 
                    <TopRowHeaderTitleWitBorderBottom infos={{ bgc: '#f0f2f5',  brc: 'none', brr: 10, title:  'Printing solutions for wherever you work' , display: 'block', strkbg:'#761bcc'}}/>
            <div className='item__container'>
                <div className='item item__one'><img src='/printer__banner/printer__banner-_2_.jpg' alt='Hello world'></img></div>
                <div className='item item__two'><img src='/printer__banner/printer__banner-_1_.jpg' alt='Hello world'></img></div>
            </div>
            <div className='item__three'><div className='item'><img src='/printer__banner/printer__banner-_3_.jpg' alt='Hello world'></img></div></div>
        </div>
    );
};

export default PrintHomeBanner;