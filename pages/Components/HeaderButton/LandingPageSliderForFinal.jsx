import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import Slider from "react-slick";
import LandingCartOne from "../Carts/CartNn/LandingCartOne";

export default class LandingPageFinalSlider extends Component {
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
      speed: 1100, 
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      focusOnSelect: true,
      autoplaySpeed: 1000,
      // vertical: true,
      // verticalSwiping: true,
      swipeToSlide: true,
    };
    return (
      <div className="brand__slider__container__with__next__prev"> 
        <div className="header__slider__slider__container">
            <Slider ref={c => (this.slider = c)} {...settings}> 
                <LandingCartOne/>
                <LandingCartOne/>
                <LandingCartOne/>
                <LandingCartOne/>
                <LandingCartOne/>
                <LandingCartOne/>
                <LandingCartOne/>
                <LandingCartOne/>
                <LandingCartOne/>
                <LandingCartOne/>
                <LandingCartOne/>
                <LandingCartOne/>
                <LandingCartOne/>
                <LandingCartOne/>
                <LandingCartOne/>
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