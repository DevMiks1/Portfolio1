/** @format */

// IMPORT CHAKRA UI RELATED
import { Flex, Heading, Text } from "@chakra-ui/react";

const JourneyDescriptionComponents = () => {
  return (
    <>
      <Flex
        flexDir="column"
        w={{ sm: "100%", md: "50%" }}
        data-aos="zoom-in-up"
        data-aos-duration="800"
      >
        <Heading as="h2" mb={10}>
          Journey
        </Heading>
        <Text className="mb-4">
          Before the pandemic, I studied BSCpe, but I admit that I no longer
          enjoy coding as it tends to overwhelm me. However, in December 2022, I
          discovered web development, and I can confidently say that I
          thoroughly enjoy creating dynamic websites with excellent design.
        </Text>
      </Flex>
    </>
  );
};

export default JourneyDescriptionComponents;
