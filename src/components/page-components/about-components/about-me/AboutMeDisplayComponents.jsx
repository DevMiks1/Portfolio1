/** @format */

// IMPORT RELATED TO REACT
import React from "react";

// IMPORT CHAKRA UI RELATED
import { Box, Heading, Text } from "@chakra-ui/react";

const AboutMeDisplayComponents = () => {
  return (
    <Box py={{ base: "10", lg: "20" }}>
      <Heading as="h2" fontSize="28px" textTransform="uppercase" pb={10}>
        Introduction and Summary
      </Heading>
      <Heading as="h3" fontSize="20px" pb={5}>
        Overview.
      </Heading>

      <Box
        w={{ base: "100%", lg: "60%" }}
        className="dark:text-alternative md:pr-40 lg:pr-60"
      >
        <Text pb={5}>
          Hi, I'm Mike Alfred Vargas. I'm inspired to become a full-stack web
          developer who can learn and adapt to new things. I want to create and
          develop solutions that can solve problems and help a lot of people
          since we know that there are a lot of possible solutions to implement
          that can give us easy access to our lives.
        </Text>
        <Text pb={5}>
          I am passionate to learn more about UI/UX design because it is nice to
          have a good implementation into your website, such as layout and API
          building on the back-end side.
        </Text>
        <Text>
          Before, I always challenged myself to corTextorate all the learnings I
          had when I was a beginner, such as Html, CSS, Bootstrap,
          Javascript,Tailwind, PHP, Laravel, and MySQL.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutMeDisplayComponents;
