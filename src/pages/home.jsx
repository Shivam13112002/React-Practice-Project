import React from "react";
import BannerSection from "../components/BannerSection";
import LogoSliderSection from "../components/LogoSliderSection";
import GallerySection from "../components/GallerySection";
import ContentSection from "../components/ContentSection";
import TabSection from "../components/TabSection.jsx";
import KeenSlider from "../components/KeenSlider.jsx";

function Home() {
  return (
    <>
      <BannerSection />
      <LogoSliderSection />
      <GallerySection />
      <ContentSection />
      <TabSection />
      <KeenSlider />
    </>
  );
} 

export default Home;
