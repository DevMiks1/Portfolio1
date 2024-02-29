/** @format */

import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BlogsInfoData } from "../../../json/BlogsInfoData";
import BlogsCategory1 from "./BlogsCategory1";

const BlogsContent1 = ({ currentItem }) => {
  return (
    <Box>
      <Flex justify="space-between">
        <Text pb={5} fontSize="28px" fontWeight="semibold">
          Pursuing Career
        </Text>
        <Text fontSize="18px">View All</Text>
      </Flex>
      <Flex w="100%" justify="space-between">
        {BlogsInfoData.Blogs.map((blog) => {
          const { id, img, alt, profile, name, date, title, url, description } =
            blog;
          return (
            <Box key={id} w={{ base: "100%", lg: "31%" }} h="100%">
              <BlogsCategory1
                id={id}
                img={img}
                alt={alt}
                profile={profile}
                name={name}
                date={date}
                title={title}
                url={url}
                description={description}
                currentItem={currentItem}
              />
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default BlogsContent1;
