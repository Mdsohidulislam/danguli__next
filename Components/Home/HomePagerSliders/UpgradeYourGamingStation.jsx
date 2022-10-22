import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { Component } from "react";
import Slider from "react-slick"; 
import EverydayEssentialsCart from "../CartNn/EverydayEssentialsCart";
import TopRowHeaderTitleWithBorder from '../TopRowHeaderTitleWithBorder/TopRowHeaderTitleWithBorder'
import NextPrevButtonUYGS from "./NextPrevButton";
 
export default class UpgradeYourGamingStation extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.products = props.product.products
    this.name = props.product.name;
    
    this.promotion__name = props.product.promotion__name;
    this.previous = this.previous.bind(this);
    this.state = {
        singleButton: 2
    }
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  } 
  render() { 


    var settings = {
      dots: false,
      infinite: this.products.length > 6,
      speed: 700, 
      slidesToShow: 6,
      slidesToScroll: 6,
      autoplay: true,
      pauseOnHover: true,
      focusOnSelect: true,
      autoplaySpeed: 5000, 
      swipeToSlide: true, 
      responsive: [
        {
          breakpoint: 1100,
          settings: {
              dots: false, 
              infinite: this.products.length > 5,
            slidesToShow: 5,
            slidesToScroll: 5, 
          }
        },
        {
          breakpoint: 900,
          settings: {
            infinite: this.products.length > 4,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 2,
            dots: false, 
          }
        },
        {
          breakpoint: 700,
          settings: {
              dots: false, 
              infinite: this.products.length > 3,
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 500,
          settings: {
              dots: false, 
              infinite: this.products.length > 2,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
              dots: false, 
              infinite: this.products.length > 2,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 300,
          settings: {
              dots: false, 
              infinite: this.products.length > 1,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };   
    const handlePushSingleCategoryPages= (name) => {
      // router.push({
      //     pathname:'SingleOfferView',
      //     query: {
      //         promotion__name: name,
      //         afk: uid()
      //     }
      // })
      
  } 

    return (
        <div className="best__rated__container"> 
            <TopRowHeaderTitleWithBorder infos={{ bgc: '#f0f2f5',  brc: '#761bcc', brr: 10 , title: this.name, promotion__name: this.promotion__name, display: 'none', strkbg: '#761bcc'}}/>
            <div className="brand__slider__container__with__next__prev"> 
                <div className="header__slider__slider__container">
                    <Slider ref={c => (this.slider = c)} {...settings}>   
                  {
                      this.products.map((info, index) => <EverydayEssentialsCart key={index} infos={info} count={index}/>)
                    } 
                    </Slider>
                </div>
                  <NextPrevButtonUYGS  name={this.promotion__name} previous={this.previous} next={this.next}/>
            </div>
      </div>
    );
  }
}