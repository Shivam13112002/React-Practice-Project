import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/aetna.png";
import image2 from "../assets/cigna.png";
import image3 from "../assets/humana.png";
import image4 from "../assets/kaiser.png";
import image5 from "../assets/united-healthcare.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

function LogoSliderSection() {
  return (
    <div className="logo-section">
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          loop={true}
          spaceBetween={20}
          className="mainSwiper"
          
          // ✅ Responsive breakpoints
          breakpoints={{
            576: {      // Small devices
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {      // Tablet
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {     // Laptop
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide><div className="logo-box"><img src={image1} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="logo-box"><img src={image2} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="logo-box"><img src={image3} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="logo-box"><img src={image4} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="logo-box"><img src={image5} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className="logo-box"><img src={image2} alt="" /></div></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default LogoSliderSection;
