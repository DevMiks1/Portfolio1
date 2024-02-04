/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const IntroductionComponents = () => {
  return (
    <>
      <Flex flexDir={{ base: "column" }}>
        <Heading
          as="h2"
          fontSize={{ base: "35px", md: "40px", lg: "50px" }}
          textAlign={{ base: "center", md: "left" }}
          pb={{ base: "5" }}
        >
          Building Digital
          <Box>Experiences that</Box>
          <Box>Inspire</Box>
        </Heading>

        <Text
          as="p"
          fontSize={{ base: "14px" }}
          pb={{ base: "5" }}
          textAlign={{ base: "center", md: "left" }}
          w={{ md: "350px", lg: "500px", xl: "550px" }}
        >
          Passionate Full-Stack Developer dedicated to elevating digital
          experiences. Crafting innovative solutions to enhance user engagement.
        </Text>
      </Flex>
    </>
  );
};

export default IntroductionComponents;
