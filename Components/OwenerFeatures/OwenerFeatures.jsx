import TopRowHeaderTitleWitBorderBottom from "../Home/TopRowHeaderTitleWithBorder/TopRowHeaderTitleWithBorderBottom"; 

const OwenerFeatures = () => {
    return (
        <div className="owener__features__container"> 
            <TopRowHeaderTitleWitBorderBottom infos={{ bgc: '#f0f2f5',  brc: 'none', brr: 10, title:  'Danguli Features' , display: 'block', strkbg:'#761bcc'}}/>
            <div className='help__anywhere__container'>
                <div className='item__left any__item'>
                    <img src='/owener__features/one.jpg' alt='hello world'></img>
                </div>
                <div className='item__right any__item'>
                    <img src='/owener__features/two.jpg' alt='hello world'></img>
                </div>
                <div className='item__right any__item'>
                    <img src='/owener__features/three.jpg' alt='hello world'></img>
                </div>
            </div>
        </div>
    );
};

export default OwenerFeatures;