import React from "react";
import { motion } from "framer-motion";

function ContentSection() {
  return (
    <div className="content-listing-section">
      <div className="container">
        <motion.h1 
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >          
          What is Lorem Ipsum?
        </motion.h1>
        <motion.p 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >          
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </motion.p>
        <motion.h2 
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          What is Lorem Ipsum?
        </motion.h2>        
        <motion.p 
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5 }}
        >          
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </motion.p>
        <motion.h3 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          What is Lorem Ipsum?
        </motion.h3> 
        <motion.p 
         whileHover={{ scale: 1.1 }}
        >          
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </motion.p>
        <motion.h4
          whileHover={{ rotate: 180 }}
        >
          What is Lorem Ipsum?
        </motion.h4> 
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >          
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </motion.p>
        <motion.h4
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What is Lorem Ipsum?
        </motion.h4> 
      </div>
    </div>
  );
}

export default ContentSection;
