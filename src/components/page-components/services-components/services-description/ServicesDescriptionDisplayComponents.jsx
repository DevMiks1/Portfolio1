/** @format */

// IMPORT CHAKRA UI RELATED
import { Box } from "@chakra-ui/react";

// IMPORT RELATED TO JSON FILE
import { ServicesData } from "../../../json/ServicesData";

// IMPORT RELATED TO COMPONENTS
import ServicesDescriptionComponents from "./ServicesDescriptionComponents";

const ServicesDescriptionDisplayComponents = () => {
  return (
    <Box>
      {ServicesData.Services.map((service) => {
        const { id, image, description, alt } = service;
        return (
          <Box key={id}>
            <ServicesDescriptionComponents
              image={image}
              description={description}
              alt={alt}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default ServicesDescriptionDisplayComponents;
