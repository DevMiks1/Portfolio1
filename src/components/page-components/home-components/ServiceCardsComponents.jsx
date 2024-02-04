/** @format */

// IMPORT RELATED TO REACT
import { NavLink } from "react-router-dom";

// IMPORT CHAKRA UI RELATED
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";

// IMPORT CREATE CONTEXT RELATED / THIS IS FOR LOADING SCREEN
import { useLoading } from "../../context/LoadingContext";

const ServiceCardsComponents = ({
  title,
  description,
  button,
  image,
  pageNumber,
  alt,
  path,
}) => {
  const { setLoadingState } = useLoading();

  const handleClick = () => {
    setLoadingState(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoadingState(false);
    }, 2000);
  };

  return (
    <Box h="100%">
      {/* IMAGE */}
      <Box h="40%">
        <Img src={image} alt={alt} h="100%" w="100%" rounded={5} />
      </Box>

      <Box h="60%" p={3}>
        <Flex flexDir="column" justify="space-between" h="100%">
          {/* TITLE */}
          <Text fontSize="20px" fontWeight="bold">
            {title}
          </Text>
          {/* DESCRIPTION */}

          <p className="text-sm ">{description}</p>

          {/* PATH OR URL */}
          <NavLink to={`${path}/${pageNumber}`}>
            <Button
              border="1px solid #3182ce"
              bg="secondary.500"
              onClick={handleClick}
              _hover={{ bg: "blue.400" }}
            >
              <Text color="white">{button}</Text>
            </Button>
          </NavLink>
        </Flex>
      </Box>
    </Box>
  );
};

export default ServiceCardsComponents;
