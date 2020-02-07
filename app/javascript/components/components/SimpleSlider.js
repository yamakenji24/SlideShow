import React, {Component} from 'react';
import Slider from 'react-slick';
import * as slidertypes from '../constants/Initialize';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    return (
      <Slider {...slidertypes.SliderSetting}>
        <div>1</div>
        <div>2</div>
      </Slider>
    )
  }
}
