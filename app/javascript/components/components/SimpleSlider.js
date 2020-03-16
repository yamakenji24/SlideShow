import React, {Component} from 'react';
import Slider from 'react-slick';
import * as slidertypes from '../constants/Initialize';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

export default class SimpleSlider extends Component {
  render() {
    return (
      <div className="slide-container">
        <Slider {...slidertypes.SliderSetting}>
          <div>1</div>
          <div>2</div>
        </Slider>
      </div>
    )
  }
}
