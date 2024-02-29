/** @format */

// IMPORT RELATED TO REACT
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// IMPORT CHAKRA UI RELATED
import { Box, Container, Flex, Heading } from "@chakra-ui/react";

// IMPORT CREATE CONTEXT RELATED / THIS IS FOR LOADING SCREEN
import { useLoading } from "../context/LoadingContext";

// IMPORT RELATED TO COMPONENTS
import RightNavBarComponents from "./RightNavBarComponents";
import BurgerComponents from "./BurgerComponents";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const { setLoadingState } = useLoading();

  // HANDLE FOR HAVING A LOADING SCREEN BEFORE GOING TO PREFER PAGE
  const handleLoading = () => {
    setLoadingState(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoadingState(false);
    }, 2000);
  };

  //   HANDLE FOR UPDATING THE ACTIVE STATE WHEN ITS CLICK
  const handleActive = (type) => {
    setActive(type);
  };

  return (
    <>
      <Box
        bg="primary.700"
        color="white"
        pos="fixed"
        w="100%"
        fontFamily="poppins"
        zIndex="100"
      >
        <Container maxW="container.xl" py={2}>
          <Flex justify="space-between" align="center">
            {/* LEFT NAVBAR */}

            <NavLink to="/">
              <Heading as="h2" onClick={handleLoading}>
                MIKEEDEV
              </Heading>
            </NavLink>

            {/* RIGHR NAVBAR */}
            <RightNavBarComponents
              handleActive={handleActive}
              active={active}
              setActive={setActive}
            />
            {/* BURGER MENU */}
            <Flex display={{ md: "flex", lg: "none" }}>
              <BurgerComponents handleActive={handleActive} active={active} />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default NavBar;
