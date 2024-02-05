/** @format */

import { Box, Img, Text } from "@chakra-ui/react";

const ServicesInfoComponents = ({ currentItem }) => {
  const { id, image, description, alt } = currentItem;
  return (
    <Box key={id}>
     
        <Box pb={5}>
          <Img src={image} alt={alt}  w="100%"/>
        </Box>

        <Box >
          {description.map((desc, index) => (
            <Text
              key={index}
              pb={5}
              data-aos="zoom-in"
            >
              {desc.descriptions}
            </Text>
          ))}
        </Box>
    
    </Box>
  );
};

export default ServicesInfoComponents;
