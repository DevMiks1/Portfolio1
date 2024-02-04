/** @format */

// IMPORT RELATED TO REACT
import React from "react";

// IMPORT CHAKRA UI RELATED
import { Box, Divider, Flex, Link, Text } from "@chakra-ui/react";

// IMPORT RELATED TO COMPONENTS
import SubFooterDisplayComponents from "./SubFooterDisplayComponents";

const SubFooter = () => {
  return (
    <Box>
      <Divider
        borderColor="gray.200"
        mx="auto"
        display={{ base: "none", sm: "block" }}
      />
      {/* LEFT SIDE SUB FOOTER */}
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justify="space-evenly"
        align="center"
        rowGap={{ base: 3, md: 0 }}
        my={6}
      >
        <Flex color="text-white" gap={1}>
          <Box>© 2023</Box>
          <Link href="https://www.facebook.com/buboyvargas/" isExternal>
            <Text as="p">Mikee.Dev</Text>
          </Link>
          <Text as="p">. All Rights Reserved.</Text>
        </Flex>

        {/* RIGHT SIDE SUB FOOTER/ ICONS */}
        <Flex>
          <SubFooterDisplayComponents />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SubFooter;
