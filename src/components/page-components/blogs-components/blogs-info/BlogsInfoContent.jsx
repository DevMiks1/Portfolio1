/** @format */

import { Box } from "@chakra-ui/react";
import React from "react";
import BlogsInfoCategory from "./BlogsInfoCategory";

const BlogsInfoContent = ({ currentItem }) => {
  console.log(currentItem);

  return (
    <Box>
      <BlogsInfoCategory currentItem={currentItem} />
    </Box>
  );
};

export default BlogsInfoContent;
