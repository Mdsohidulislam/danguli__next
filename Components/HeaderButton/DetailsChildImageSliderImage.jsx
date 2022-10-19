
const DetailsChildImageSliderImage = ({img__src, parentProps}) => {
    let {setImgSrc} = parentProps;
    const handleSetZoomImage = () => {
        setImgSrc(img__src)
    }
    return (
        <div className='details__child__image__slider__container'>
            <div className='image__container'>
                <img  src={img__src} onClick={handleSetZoomImage} alt='Helllo  world'/>
            </div>
        </div>
    );
};

export default DetailsChildImageSliderImage;