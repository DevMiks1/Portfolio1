/** @format */

// IMPORT RELATED TO REACT
import { Link, useLocation } from "react-router-dom";

// IMPORT CHAKRA UI RELATED
import { Flex, Text } from "@chakra-ui/react";

// IMPORT CREATE CONTEXT RELATED / THIS IS FOR LOADING SCREEN
import { useLoading } from "../context/LoadingContext";

const NavBarListComponents = ({
  name,
  path,
  handleActive,
  isMobile,
  icon,
}) => {
  const { setLoadingState } = useLoading();
  const location = useLocation();

  const currentPath = location.pathname;

  const handleNavBar = () => {
    setLoadingState(true);
    handleActive(currentPath);

    window.scrollTo(0, 0);

    setTimeout(() => {
      setLoadingState(false);
    }, 2000);
  };

  return (
    <>
      <Link to={path}>
        <Flex
          onClick={handleNavBar}
          color={path === currentPath ? "secondary.500" : ""}
          _hover={{
            textDecoration: "none",
            transition: "0.3s",
            color: "secondary.500",
          }}
          gap={isMobile ? 5 : 0}
          justify={isMobile ? "center" : ""}
          align={isMobile ? "center" : ""}
        >
          {isMobile && icon}
          <Text>{name}</Text>
        </Flex>
      </Link>
    </>
  );
};

export default NavBarListComponents;
