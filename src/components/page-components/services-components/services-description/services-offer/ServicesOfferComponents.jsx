/** @format */

// IMPORT RELATED TO REACT
import { Link } from "react-router-dom";

// IMPORT CHAKRA UI RELATED
import { Box, Flex, Img, Text } from "@chakra-ui/react";

// IMPORT CREATE CONTEXT RELATED / THIS IS FOR LOADING SCREEN
import { useLoading } from "../../../../context/LoadingContext";

const ServicesOfferComponents = ({ image, itemNumber, title, alt }) => {
  const { setLoadingState } = useLoading();
  const handleClick = () => {
    setLoadingState(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoadingState(false);
    }, 2000);
  };
  return (
    <Flex>
      <Box flex={1} data-aos="zoom-in" data-aos-duration="700">
        <Img src={image} alt={alt} />
      </Box>

      <Box flex={2} data-aos="zoom-in-up" data-aos-duration="700">
        <Link to={`/services/${itemNumber}`}>
          <Text
            as="h3"
            px={3}
            _hover={{ color: "secondary.500", transition: "0.3s" }}
            onClick={handleClick}
          >
            {title}
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default ServicesOfferComponents;
