/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Flex } from "@chakra-ui/react";

// IMPORT RELATED TO JSON FILE
import { ServicesCardData } from "../../json/ServicesCardData";

// IMPORT RELATED TO COMPONENTS
import ServiceCardsComponents from "./ServiceCardsComponents";

const ServiceCardsDisplayComponents = () => {
  return (
    <Flex
      flexDir={{ sm: "column", md: "row" }}
      h="100%"
      flexWrap="wrap"
      justify={{ sm: "center ", lg: "space-between" }}
      align="center"
      columnGap={{ md: 7, lg: 0 }}
      rowGap={7}
    >
      {ServicesCardData.Services.map((cards) => {
        const { id, title, description, button, image, pageNumber, alt, path } =
          cards;
        return (
          <Box
            key={id}
            width={{ base: "100%", sm: "70%", md: "40%", lg: "30%" }}
            border="2px solid #3182ce"
            h={{base: "100%", }}
            data-aos="fade-up"
            data-aos-duration="700"
            style={{ boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)" }}
            rounded={5}
          >
            <ServiceCardsComponents
              title={title}
              description={description}
              button={button}
              image={image}
              pageNumber={pageNumber}
              alt={alt}
              path={path}
            />
          </Box>
        );
      })}
    </Flex>
  );
};

export default ServiceCardsDisplayComponents;
