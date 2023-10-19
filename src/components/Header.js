import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Spacer, } from "@chakra-ui/react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);
  return scrollDirection;
};

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const linkStyles = {
    color: "black",
    textDecoration: "none",
    fontWeight: "bold",
  };


  return (
    <Box
    zIndex={1}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={
      useScrollDirection() === "down" ? "translateY(-200px)" : "translateY(0)"
      }
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#EEEFEE"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack>
              <Box>
                <a href="/#homepage" onClick={handleClick("homepage")}>
                  <img src="https://cdn.dribbble.com/userupload/4149863/file/original-b59dcb3c6b4dcb6f87e9dc0b9a0e5a23.png" alt="logo" width={200} height={50}></img>
                </a>
              </Box>
              <Spacer w={3}/>
              <HStack spacing={4}>
                <a href="/#menupage" onClick={handleClick("menupage")} style={linkStyles}>Menu</a>
                <a href="/#reservation" onClick={handleClick("reservation")} style={linkStyles}>Reservation</a>
                <a href="/#contact" onClick={handleClick("contact")} style={linkStyles} >Contact</a>
              </HStack>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={3}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
                <FontAwesomeIcon icon={faFacebook} size="2x"/>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
                <FontAwesomeIcon icon={faYoutube} size="2x"/>
              </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
                <FontAwesomeIcon icon={faTiktok} size="2x"/>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
              </a>
              <a href="mailto: hello@example.com" target="_blank" rel="noopener noreferrer" style={linkStyles}>
                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;