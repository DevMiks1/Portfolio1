/** @format */

import { Avatar, Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

const BlogsInfoCategory = ({ currentItem }) => {
  const { img, alt, profile, name, date, title, description } = currentItem;
  return (
    <Flex flexDir="column">
      <Img src={img} alt={alt} />
      <Box px={1}>
        <Flex gap={5} color="gray.300" fontSize="14px" align="center" py={5}>
          <Avatar src={profile} size="sm" data-aos="fade-right"/>
          <Flex flexDir="column" data-aos="zoom-in">
            <Text>{name}</Text>
            <Text>{date}</Text>
          </Flex>
        </Flex>

        <Text fontSize="24px" fontWeight="semibold" pb={5} data-aos="zoom-in">
          {title}
        </Text>

        <Text >{description}</Text>
      </Box>
    </Flex>
  );
};

export default BlogsInfoCategory;
