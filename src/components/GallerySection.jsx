import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import image1 from "../assets/tourist.jpg";
import image2 from "../assets/tourist.jpg";
import image3 from "../assets/tourist.jpg";
import image4 from "../assets/tourist.jpg";
import image5 from "../assets/tourist.jpg";
import image6 from "../assets/tourist.jpg";

export default function GallerySection() {
  const images = [image1, image2, image3, image4, image5, image6,];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="gallery-section">
        <div className="container">
            <h1 className="text-center mb-40">Galley Lightbox</h1>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="20px">
                {images.map((img, index) => (
                <div className="gallery-box" key={index}>
                    <img
                    src={img}
                    alt=""
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() => {
                        setPhotoIndex(index);
                        setIsOpen(true);
                    }}
                    />
                </div>
                ))}
            </Masonry>
            </ResponsiveMasonry>

            {isOpen && (
            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                index={photoIndex}
                slides={images.map((img) => ({ src: img }))}
                on={{
                view: ({ index }) => setPhotoIndex(index),
                }}
            />
            )}
        </div>
    </div>
  );
}
