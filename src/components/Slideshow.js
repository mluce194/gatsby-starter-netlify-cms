import React from "react";
import { Slide } from "react-slideshow-image";
import './all.sass'
import './slideshow.css'
import Image1 from "../img/bg/slider3.jpg";
import Image2 from "../img/bg/slider4.jpg";

const slideImages = [Image1, Image2];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
      </Slide>
    </div>
  );
}
