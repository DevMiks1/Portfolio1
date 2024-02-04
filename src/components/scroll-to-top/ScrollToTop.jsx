/** @format */

// IMPORT RELATED TO REACT
import React, { useState, useEffect } from "react";

// IMPORT CHAKRA UI RELATED
import { IconButton } from "@chakra-ui/react";

// IMPORT RELATED TO REACT ICONS
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <IconButton
      onClick={scrollToTop}
      icon={<FaArrowUp />}
      colorScheme="primary"
      size="lg"
      position="fixed"
      bottom="14"
      right="7"
      opacity={isVisible ? 1 : 0}
      pointerEvents={isVisible ? "auto" : "none"}
      transition="opacity 0.3s ease-in-out"
      zIndex="20"
    />
  );
};

export default ScrollToTop;
