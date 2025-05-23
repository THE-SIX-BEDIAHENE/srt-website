import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`cursor-pointer fixed bottom-6 right-6 p-3 bg-gradient-to-r from-gray-800 to-blue-800  text-white rounded-full shadow-lg transition-transform ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } z-50`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
