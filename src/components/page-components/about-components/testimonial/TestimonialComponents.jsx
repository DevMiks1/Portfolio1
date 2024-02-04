/** @format */

// IMPORT RELATED TO REACT
import React from "react";

// IMPORT CHAKRA UI RELATED
import { Flex, Text } from "@chakra-ui/react";

const TestimonialComponents = ({ name, position, testimonials }) => {
  return (
    <Flex
      flexDir="column"
      justify="space-between"
      h={{ base: "100%" }}
      pb={{ base: 5, md: 0 }}
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Text pb={10}>{testimonials}</Text>
      <Text fontSize="14px" color="gray.300">
        - {name} | {position}
      </Text>
    </Flex>
  );
};

export default TestimonialComponents;
