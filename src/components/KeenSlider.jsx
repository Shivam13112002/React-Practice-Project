import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import ImageOne from "../assets/mountain.jpg";
import ImageTwo from "../assets/tourist.jpg";
import ImageThree from "../assets/image-3.jpg";
import ImageFour from "../assets/image-4.jpg";
import ImageFive from "../assets/image-5.jpg";
import ImageSix from "../assets/image-6.jpg";


const carousel = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

export default function KeenSlider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

  return (
    <div className="keenslider-section">
      <div className="container">
          <div className="wrapper">
            <div className="scene">
              <div className="carousel keen-slider" ref={sliderRef}>
                <div className="carousel__cell number-slide1">
                  <div className="image">
                    <img src={ImageSix} alt="" />
                  </div>
                </div>
                <div className="carousel__cell number-slide2">
                  <div className="image">
                    <img src={ImageTwo} alt="" />
                  </div>
                </div>
                <div className="carousel__cell number-slide3">
                  <div className="image">
                    <img src={ImageThree} alt="" />
                  </div>
                </div>
                <div className="carousel__cell number-slide4">
                  <div className="image">
                    <img src={ImageFour} alt="" />
                  </div>
                </div>
                <div className="carousel__cell number-slide5">
                  <div className="image">
                    <img src={ImageOne} alt="" />
                  </div>
                </div>
                <div className="carousel__cell number-slide6">
                  <div className="image">
                    <img src={ImageFive} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
