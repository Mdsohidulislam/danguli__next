import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import Slider from "react-slick";
import HeaderCartSame from "./HeaderCartSame"; 

export default class SameBrandViews extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.products = props.infos.sameBrandProducts; 
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
    const settings = {
      dots: false,
      infinite: false,
      autoplay: true,
      speed: 500,
      arrow: false,
      slidesToShow: 4,
      slidesToScroll: 4,
            responsive: [
        {
          breakpoint: 1150,
          settings: {
              dots: false,  
            slidesToShow: 3,
            slidesToScroll: 3, 
          }
        },  
        {
          breakpoint: 950,
          settings: {
              dots: false,  
            slidesToShow: 2,
            slidesToScroll: 2, 
          }
        },  
        {
          breakpoint: 630,
          settings: {
              dots: false,  
            slidesToShow: 1,
            slidesToScroll: 1, 
          }
        },  
      ]
    };
    return (
      <div className="brand__slider__container__with__next__prev"> 
        <div className="header__slider__slider__container">
            <Slider ref={c => (this.slider = c)} {...settings}>
              {
                this.products.map((info , index) => <HeaderCartSame key={index} infos={info}></HeaderCartSame> )
              }
                
            </Slider>
        </div>
        <div className="header__slider__button__container">
          <button className="button" onClick={this.previous}>
            <FontAwesomeIcon icon={faBackward}/>
          </button>
          <button className="button" onClick={this.next}>
            <FontAwesomeIcon icon={faForward}/>
          </button>
        </div>
      </div>
    );
  }
}