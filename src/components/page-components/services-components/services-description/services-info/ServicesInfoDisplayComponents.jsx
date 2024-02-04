/** @format */

// IMPORT CHAKRA UI RELATED
import { Box } from "@chakra-ui/react";

// IMPORT RELATED TO COMPONENTS
import ServicesInfoComponents from "./ServicesInfoComponents";

const ServicesInfoDisplayComponents = ({ currentItem }) => {
  return (
    <Box>
      <ServicesInfoComponents currentItem={currentItem} />
    </Box>
  );
};

export default ServicesInfoDisplayComponents;
