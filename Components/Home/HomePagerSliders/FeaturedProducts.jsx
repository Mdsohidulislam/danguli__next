import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import Slider from "react-slick";
import EverydayEssentialsCart from "../Carts/CartNn/EverydayEssentialsCart";
import TopRowHeaderTitleWithBorder from "../TopRowHeaderTitleWithBorder/TopRowHeaderTitleWithBorder";

export default class FeaturedProducts extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.products = props.products

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
    let nums  = [1,2,3,4,5,56,9,6,9,10]
    var settings = {
      dots: false,
      infinite: false,
      speed: 700, 
      slidesToShow: 5,
      slidesToScroll: 5,
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
              infinite:  nums.length > 5,
            slidesToShow: 5,
            slidesToScroll: 5, 
          }
        },
        {
          breakpoint: 900,
          settings: {
              infinite:  nums.length > 4,
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
              infinite:  nums.length > 3,
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 500,
          settings: {
              dots: false, 
              infinite:  nums.length > 2,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
              dots: false, 
              infinite:  nums.length > 2,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 300,
          settings: {
              dots: false, 
              infinite:  nums.length > 1,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };  
    return (
        <div className="best__rated__container"> 
                    <TopRowHeaderTitleWithBorder infos={{ bgc: '#f0f2f5',  brc: '#761bcc', brr: 10 , title: 'Featured Products', display: 'none', strkbg: '#761bcc'}}/>
            <div className="brand__slider__container__with__next__prev"> 
                <div className="header__slider__slider__container">
                    <Slider ref={c => (this.slider = c)} {...settings}> 
                    {
                      this.products.map((info, index) => <EverydayEssentialsCart key={index} infos={info} count={index}/>)
                    } 
                    </Slider>
                </div>
                <div className="header__slider__button__container">
                <button className="button" onClick={this.previous}>
                    <FontAwesomeIcon icon={faBackward}/>
                </button> 
                <button style={{marginLeft:'10px'}} className="button">
                    VIEW ALL
                </button> 
                <button className="button" onClick={this.next}>
                    <FontAwesomeIcon icon={faForward}/>
                </button>
                </div>
            </div>
      </div>
    );
  }
}