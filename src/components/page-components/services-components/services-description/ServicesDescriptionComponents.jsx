/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Img, Text } from "@chakra-ui/react";

const ServicesDescriptionComponents = ({ image, description, alt }) => {
  return (
    <Box className="col-span-2 px-7">
      <Box>
        <Img src={image} alt={alt} />
      </Box>

      <Box>
        {description.map((des, index) => {
          return (
            <Text key={index} py={5} data-aos="zoom-in">
              {des.descriptions}
            </Text>
          );
        })}
      </Box>
    </Box>
  );
};

export default ServicesDescriptionComponents;
