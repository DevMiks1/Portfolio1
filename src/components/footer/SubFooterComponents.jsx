/** @format */

// IMPORT RELATED TO REACT
import React from "react";

// IMPORT CHAKRA UI RELATED
import { Box, Link } from "@chakra-ui/react";

const SubFooterComponents = ({ socialpath, icon }) => {
  return (
    <Box _hover={{ color: "secondary.500" }}>
      <Link href={socialpath} isExternal>
        {icon}
      </Link>
    </Box>
  );
};

export default SubFooterComponents;
