import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import Slider from "react-slick";
import HeaderCart from "./HeaderCart";

export default class BrandSliderSimilar extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
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
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className="brand__slider__container__with__next__prev"> 
        <div className="header__slider__slider__container">
            <Slider ref={c => (this.slider = c)} {...settings}>
                <HeaderCart/>
                <HeaderCart/>
                <HeaderCart/>
                <HeaderCart/>
                <HeaderCart/>
                <HeaderCart/>
                <HeaderCart/>
                <HeaderCart/>
                <HeaderCart/>
                <HeaderCart/>
                <HeaderCart/>
                <HeaderCart/>
                <HeaderCart/>
                <HeaderCart/>
                <HeaderCart/>
                <HeaderCart/>
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
    );
  }
}