/** @format */

import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <Flex
      as="section"
      flexDir="column"
      justify="center"
      align="center"
      minH="100vh"
    >
      <Heading as="h2" fontSize="40px" fontWeight="bold">
        404 Not Found
      </Heading>
      <Link to="/">
        <Button
          px={7}
          mt={10}
          py={2}
          bg="secondary.500"
          _hover={{
            bg: "blue.400",
            cursor: "pointer",
          }}
        >
          <Text color="white">Home</Text>
        </Button>
      </Link>
    </Flex>
  );
};
