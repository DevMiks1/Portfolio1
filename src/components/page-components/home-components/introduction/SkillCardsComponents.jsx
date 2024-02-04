/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Img } from "@chakra-ui/react";

const SkillCardsComponents = ({ image, alt }) => {
  return (
    <>
      <Box border="1px solid #3182ce" rounded={10}>
        <Img
          py={2}
          px={2}
          h={{ base: "40px", md: "55px", lg: "60px" }}
          w={{ base: "40px", md: "55px", lg: "60px" }}
          src={image}
          alt={alt}
        />
      </Box>
    </>
  );
};

export default SkillCardsComponents;
