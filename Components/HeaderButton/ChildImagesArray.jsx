import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import Slider from "react-slick";
import DetailsChildImageSliderImage from "./DetailsChildImageSliderImage";

export default class ChildImagesArray extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.images = props.infos.allImages 
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
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    }; 
    return (
      <div className="brand__slider__container__with__next__prev brand__slider__container__with__next__prev__child__array"> 
        <div className="header__slider__slider__container">
            <Slider ref={c => (this.slider = c)} {...settings}> 
              {
                this.images.map((info, index) => < DetailsChildImageSliderImage key={index} img__src={info} parentProps ={this.props.infos}></DetailsChildImageSliderImage>   )
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