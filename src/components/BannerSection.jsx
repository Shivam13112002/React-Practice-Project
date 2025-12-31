import React from "react";
import { motion } from "framer-motion";
import imageone from "@/assets/images/image-5.jpg";

function BannerSection() {
  return (
    <div className="main-banner-section">
      <div className="container">
        <div className="row-wrapper">
          <div className="left-wrap">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Welcome To Adventure
            </motion.h1>            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >          
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
              eaque repellendus distinctio? Perferendis nobis, vel officia
              laborum et a facere voluptatem sequi, tenetur praesentium explicabo
              aut ipsa velit totam repellat?
            </motion.p>
            <div className="btn-wrap">
              <motion.a className="btn-primary" href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact Us
              </motion.a>
            </div>
          </div>

          <div className="right-wrap">
            <div className="image">
                <img src={imageone} alt="banner" width={"100%"}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BannerSection;
