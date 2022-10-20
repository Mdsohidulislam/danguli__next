import { Carousel } from 'react-responsive-carousel';
const Carousell = () => {
    let CarouselImages = [
        {src: '/banner/1.jpg', alt: 'home banner image', color: '#3F0786'},
        {src: '/banner/2.jpg', alt: 'home banner image', color: '#FFF1EC'},
        {src: '/banner/3.jpg', alt: 'home banner image', color: '#C3FFFB'},
        {src: '/banner/4.jpg', alt: 'home banner image', color: '#400039'},
        {src: '/banner/5.jpg', alt: 'home banner image', color: '#400039'},
        {src: '/banner/6.jpg', alt: 'home banner image', color: '#FEDAFE'},
        {src: '/banner/7.jpg', alt: 'home banner image', color: '#3F0786'},
        {src: '/banner/8.jpg', alt: 'home banner image', color: '#FB5409'},
        {src: '/banner/9.jpg', alt: 'home banner image', color: '#F8FF97'},
    ];
    return ( 
        <div className='home__carousel__contianer'>
            <Carousel autoPlay={true} transitionTime={2000} infiniteLoop={true} showThumbs={false} showArrows={false} className='my__react__carousel__style'>
                {CarouselImages.map((info, index) =>  {
                    return              <div key={index} style={{backgroundColor:info.color}}> 
                                                <img src={info.src} alt={info.alt}></img>
                                            </div>
                })} 
            </Carousel>
        </div>
    );
};

export default Carousell;