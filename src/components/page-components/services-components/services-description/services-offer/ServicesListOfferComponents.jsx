/** @format */

// IMPORT CHAKRA UI RELATED
import { Box } from "@chakra-ui/react";

// IMPORT RELATED TO JSON FILE
import { ServicesData } from "../../../../json/ServicesData";

// IMPORT RELATED TO COMPONENTS
import ServicesOfferComponents from "./ServicesOfferComponents";

const ServicesListOfferComponents = () => {
  return (
    <Box>
      {ServicesData.ServicesOffer.map((offer) => {
        const { id, itemNumber, image, title, name, alt } = offer;
        return (
          <Box py={5} key={id}>
            <ServicesOfferComponents
              itemNumber={itemNumber}
              name={name}
              image={image}
              title={title}
              alt={alt}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default ServicesListOfferComponents;
