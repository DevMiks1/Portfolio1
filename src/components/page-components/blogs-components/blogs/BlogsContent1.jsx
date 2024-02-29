/** @format */

import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BlogsInfoData } from "../../../json/BlogsInfoData";
import BlogsCategory1 from "./BlogsCategory1";

const BlogsContent1 = ({ currentItem }) => {
  return (
    <Box>
      <Flex>
        <Text pb={5} fontSize="28px" fontWeight="semibold">
          Pursuing Career
        </Text>
      </Flex>
      <Flex
        flexDir={{ base: "column", md: "row" }}
       
        justify="space-between"
        gap={{ base: 10, md: 0 }}
        flexWrap="wrap"
      >
        {BlogsInfoData.Blogs.map((blog) => {
          const { id, img, alt, profile, name, date, title, url, description } =
            blog;
          return (
            <Box key={id} h="100%"  w={{ base: "100%", md: "48%", lg: "31%" }} flexWrap="wrap" pb={{md: 10, lg: 0}}>
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
