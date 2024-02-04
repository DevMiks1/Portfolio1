/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Heading } from "@chakra-ui/react";

// IMPORT RELATED TO COMPONENTS
import ServicesListOfferComponents from "./ServicesListOfferComponents";

const ServicesOfferDisplayComponents = () => {
  return (
    <Box>
      <Box
        pb={10}
        borderBottom="2px solid white"
        data-aos="zoom-in-up"
        data-aos-duration="700"
      >
        <Heading as="h2" textAlign="center" fontWeight="bold" fontSize="24px">
          SERVICES OFFER
        </Heading>
      </Box>
      <ServicesListOfferComponents />
    </Box>
  );
};

export default ServicesOfferDisplayComponents;
