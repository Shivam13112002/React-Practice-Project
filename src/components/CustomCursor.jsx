import React, { useEffect, useState } from "react";
import "./cursor.css";

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    // Move cursor globally on whole site
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);

    // Hover effect for links, buttons, and any element with class="cursor-hover"
    const hoverElements = () => {
      const elements = document.querySelectorAll(
        "a, button, .cursor-hover, input, .swiper-slide"
      );

      elements.forEach((el) => {
        el.addEventListener("mouseenter", () => setHover(true));
        el.addEventListener("mouseleave", () => setHover(false));
      });
    };

    // Run hover binding after page fully loads
    setTimeout(hoverElements, 500);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${hover ? "cursor-hover" : ""}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      ></div>

      <div
        className={`cursor-outline ${hover ? "cursor-outline-hover" : ""}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
