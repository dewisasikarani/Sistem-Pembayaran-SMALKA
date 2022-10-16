import { IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { animateScroll } from "react-scroll";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [transY, setTransY] = useState(0);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      const scrolledBottom =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight -
        scrolled;
      if (scrolled > 50) {
        setVisible(true);
        setTransY(5);
      } else if (scrolled <= 50) {
        setVisible(false);
        setTransY(0);
      }

      if (scrolledBottom <= 100) {
        setVisible(false);
        setTransY(0);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const sendToTop = () => {
    animateScroll.scrollToTop({ duration: "750", smooth: true });
  };

  return (
    <IconButton
      position="fixed"
      bottom={transY}
      right={{ base: 3, md: 6, lg: 5 }}
      zIndex="1"
      visibility={visible ? "visible" : "hidden"}
      opacity={visible ? "1" : "0"}
      transition="all 0.3s ease-in-out"
      aria-label="Click to top."
      size="lg"
      colorScheme="green"
      borderRadius="full"
      fontSize="2xl"
      icon={<BsFillArrowUpCircleFill />}
      onClick={sendToTop}
    />
  );
};

export default ScrollToTop;
