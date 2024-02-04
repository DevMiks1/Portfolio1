/** @format */

// IMPORT CHAKRA UI RELATED
import { Box, Flex } from "@chakra-ui/react";

// IMPORT RELATED TO JSON FILE
import { TestimonialData } from "../../../json/TestimonialData";

// IMPORT RELATED TO COMPONENTS
import TestimonialComponents from "./TestimonialComponents";

const TestimonialDisplayComponents = () => {
  return (
    <Flex flexDir={{ base: "column", md: "row" }} gap={5}>
      {TestimonialData.Testimonial.map((testimonial) => {
        const { id, name, position, testimonials } = testimonial;
        return (
          <Box px={{ md: 0, lg: 10 }} key={id}>
            <TestimonialComponents
              name={name}
              position={position}
              testimonials={testimonials}
            />
          </Box>
        );
      })}
    </Flex>
  );
};

export default TestimonialDisplayComponents;
