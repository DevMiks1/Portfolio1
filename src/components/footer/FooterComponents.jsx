/** @format */

// IMPORT RELATED TO REACT
import React from "react";
import { NavLink } from "react-router-dom";

// IMPORT CHAKRA UI RELATED
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

const FooterComponents = ({ title, data }) => {
  return (
    <Flex flexDir="column" align="center" justify="center">
      <Heading as="h2">{title}</Heading>

      {data.map((el) => {
        return (
          <Box
            key={el.id}
            onClick={() => {
              if (el.isClickable && el.type !== "outsidelink") {
                window.scrollTo(0, 0);
              }
            }}
          >
            {el.isClickable && el.type === "outsidelink" ? (
              <Link isExternal href={el.link} _hover={{ textDecor: "none" }}>
                <Text py={3} color="gray.300" _hover={{ color: "gray.100" }}>
                  {el.data}
                </Text>
              </Link>
            ) : (
              <NavLink to={el.path} _hover={{ textDecor: "none" }}>
                <Text
                  py={3}
                  color="gray.300"
                  _hover={{
                    color: "gray.100",
                    cursor: el.isClickable ? "pointer" : "not-allowed",
                  }}
                >
                  {el.data}
                </Text>
              </NavLink>
            )}
          </Box>
        );
      })}
    </Flex>
  );
};

export default FooterComponents;
